
import { Field, FieldArray } from 'formik';
const RegisterFormikArray = ({ name }) => {
    return <FieldArray
        name={name}

    >
        {arrayHelpers => {
            return (
                <div>
                    {arrayHelpers.form.values[name] && arrayHelpers.form.values[name].length > 0 ? (
                        arrayHelpers.form.values[name].map((friend, index) => (
                            <div key={index}>
                                <Field name={`${name}.${index}`} />
                                <button
                                    type="button"
                                    onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                    className="bg-dark text-light rounded-circle mx-1 border border-white"
                                >
                                    -
                                </button>
                                <button
                                    type="button"
                                    onClick={() => arrayHelpers.push('')} // insert an empty string at the next position
                                    className="bg-dark text-light rounded-circle border border-white"
                                >
                                    +
                                </button>
                            </div>
                        ))
                    ) : (
                        <button className="d-block bg-light text-dark rounded mx-2 mt-3 border border-dark" type="button" onClick={() => arrayHelpers.push('')}>
                            Add a hobby!
                        </button>
                    )}

                </div>
            )
        }}
    </FieldArray>
}
export default RegisterFormikArray;