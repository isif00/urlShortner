/* eslint-disable @typescript-eslint/no-unused-vars */
import { component$ } from '@builder.io/qwik';
import { useForm, valiForm$ } from '@modular-forms/qwik';
import { url, type Input, minLength, object, string } from 'valibot';
import { useFormLoader } from '~/routes';

const UrlSchema = object({
  url: string([
    minLength(20, 'Please enter a url.'),
    url('bad url format'),
  ]),
});
 
export type UrlForm = Input<typeof UrlSchema>;

export default component$(() => {
  const [urlForm, { Form, Field}] = useForm<UrlForm>({
    loader: useFormLoader(),
    validate: valiForm$(UrlSchema),
  });

    return (
        <Form>
            <Field name="url" >
                {(field, props) => (
                    <div>
                        <input {...props} type="password" value={field.value} />
                        {field.error && <div>{field.error}</div>}
                    </div>
            )}
            </Field>
        </Form>
        );
});