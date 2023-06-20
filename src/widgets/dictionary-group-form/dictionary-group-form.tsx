import { useForm, SubmitHandler } from "react-hook-form"
import { DictionaryGroupElement } from 'entities/dictionary-group'
import { Grid, TextField, Button } from '@mui/material'
import { useDictionaryGroupStore, addDictionaryGroupItem } from 'entities/dictionary-group'

export const DictionaryGroupForm = () => {

    const { items } = useDictionaryGroupStore(state => state);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<DictionaryGroupElement>()

    const empty = {
        key: "",
        text: ""
    };

    const addGroupItem: SubmitHandler<DictionaryGroupElement> = (newGroupItem) => {
        const dublicate = items.find(item => item.key === newGroupItem.key);
        if (dublicate === undefined) {
            addDictionaryGroupItem(newGroupItem);
            reset(empty)
        } else {
            alert('такой ключ уже есть: ' + dublicate.key)
        }
    }

    return (
        <form onSubmit={handleSubmit(addGroupItem)}>
            <Grid container columnSpacing={3} alignItems={'center'} sx={{ my: 2 }}>
                <Grid item>
                    <TextField {...register("key")} label="Ключ" variant='standard' />
                </Grid>
                <Grid item>
                    <TextField {...register("text", { required: true })} label="Описание" variant='standard' />
                    {errors.text && <p>This field is required</p>}
                </Grid>
                <Button type="submit" variant='outlined' sx={{ mx: 2, height: 40 }}>Добавить</Button>
            </Grid>
        </form>
    )
}

