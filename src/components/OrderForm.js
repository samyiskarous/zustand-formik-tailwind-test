import { Formik, Form, Field, ErrorMessage } from 'formik';
import useStore from '../store';

const OrderForm = () => {

    const addOrderToCart = useStore(state => state.addOrderToCart)
    
    return (

        <div className="flex justify-center">
            <Formik
                initialValues={{ order: '', quantity: '' }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                    // alert(JSON.stringify(values, null, 2));
                    addOrderToCart(values.order, values.quantity)
                    setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <Form className="flex-col">
            
                        <div>
                            <p>Order</p>
                            <Field className="border-2" type="text" name="order" />
                            <ErrorMessage name="order" component="div" />
                        </div>
                        
                        <div className="mt-3">
                            <p>Quantity</p>
                            <Field className="border-2" type="number" name="quantity"/>
                            <ErrorMessage name="quantity" component="div" />
                        </div>

                        <div className="flex justify-end mt-7">
                            <button className="border-2 " type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </div>
            
                    </Form>
                )}
            
            </Formik>

        </div>
    );

};

 

export default OrderForm;