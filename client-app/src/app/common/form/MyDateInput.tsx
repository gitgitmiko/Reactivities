import { useField } from "formik";
import { Form, Label } from "semantic-ui-react";
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker, { DatePickerProps } from 'react-datepicker';

export default function MyDateInput(props: Partial<DatePickerProps>) {
    const [field, meta, helpers] = useField(props.name!);
    return (
        <Form.Field error={meta.touched && !!meta.error}>
            <DatePicker
                 {...field}
                 selected={(field.value &&  new Date(field.value)) || null}
                 onChange={value => helpers.setValue(value)}
                 placeholderText="Date"
                 showTimeSelect
                 timeCaption='time'
                 dateFormat='MMMM d, yyyy h:mm aa'
            />
            {meta.touched && meta.error ? (
                <Label basic color ='red'>{meta.error}</Label>
            ) : null}
        </Form.Field>
    )
}