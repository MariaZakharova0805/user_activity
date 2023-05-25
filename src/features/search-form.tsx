import React from "react";
import { useForm } from "react-hook-form";
import { Button, Stack, TextField } from "@mui/material";

const SearchForm = ({ filterData,addFilterData, useEvents, onSubmit, urlParams }) => {

  console.log(filterData);
  let paramOne = Object.keys(filterData)[0];
  let paramTwo = Object.keys(filterData)[1];
  let paramThree = Object.keys(filterData)[2];

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    //React-hook-from смотрит параметры в строке url
    // defaultValues: {
    //   paramOne,
    //   paramTwo,
    //   paramThree,
    // },
  });


  React.useEffect(() => {
    const subscription = watch((value) => {
      addFilterData(value);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack
        direction={{ sm: "column", md: "row" }}
        spacing={{ xs: 1, sm: 1, md: 2 }}
      >
        <TextField
          size="small"
          type="date"
          variant="filled"
          //{...register(paramOne)}
        />
        <TextField
          size="small"
          type="date"
          variant="filled"
          //{...register(paramTwo)}
        />
        <TextField
          size="small"
          variant="filled"
          placeholder="uuid пользователя"
         //{...register(paramThree)}
        />
        <Button
          variant="outlined"
          type="submit"
          sx={{
            borderColor: "primary.light",
            color: "primary.light",
            width: "120px",
            ":hover": {
              bgcolor: "primary.light",
              color: "primary.dark",
            },
          }}
        >
          Выгрузить
        </Button>
      </Stack>
    </form>
  );
};

export default SearchForm;
