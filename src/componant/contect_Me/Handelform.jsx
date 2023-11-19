import { useFormik } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';

const Handelform = () => {
  const [Isloding, setIsloding] = useState('not_loding');


    const validationSchema = yup.object({
        name: yup.string()
        .min(4, 'Name should be of minimum 4 characters length')
        .required('Name is required'),
        subject: yup.string()
        .min(7, 'subject should be of minimum 7 characters length'),
        message: yup.string()
        .min(15, 'Message should be of minimum 15 characters length')
        .required('Message is required'),
      });
      const initialValues = { name: ''  ,  subject: '', message: '', };

      const formik_contectus = useFormik({
        initialValues,
        validationSchema: validationSchema,
        onSubmit: async (values , {resetForm}) => {
          setIsloding('is_loding')
          const Emailapi = "https://sendmail-api-docs.vercel.app/api/send";
          fetch(Emailapi, {
        method: "POST",
        body:JSON.stringify({
          to: "essh4014@gmail.com",
          subject:values.subject || 'massage from user',
          message:`Name: ${values.name}  \n message: ${values.message}` ,
        })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch((error) => {
      setIsloding('err');
      console.error(error);
    });
      setIsloding('Done')
      resetForm({values:''})
        },
      });
    
      return [formik_contectus , Isloding];
}

export default Handelform
