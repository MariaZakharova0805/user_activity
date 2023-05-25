import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useEvents } from "./use-events-store";
import { Button } from "../../shared/ui/button/button";
import { fetchEvents } from "../../shared/api";

const EventsSearchForm = () => {
  const { setItems, urlParams, filterData, setFilterData } = useEvents(state => state);
  const {
    register,
    handleSubmit,
    watch
  } = useForm({
    defaultValues: {
      fromDate: urlParams.fromDate ? urlParams.fromDate : "",
      toDate: urlParams.toDate ? urlParams.toDate : ""
    },
  });

  useEffect(() => {
    setFilterData(urlParams)
  }, [urlParams]);

  useEffect(() => {
    const subscription = watch((value) => {
      setFilterData(value)
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit = async () => {
    const events = await fetchEvents(filterData);
    setItems(events);
    history.pushState({}, '', `/events/?fromDate=${filterData.fromDate}&toDate=${filterData.toDate}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="searchForm">
      <input type="date" {...register("fromDate")} className="textInt_input" />
      <input type="date" {...register("toDate")} className="textInt_input" />
      <Button type="submit">Выгрузить</Button>
    </form>
  );
};

export default EventsSearchForm;
