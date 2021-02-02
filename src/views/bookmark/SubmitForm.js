import { Box, Card, TextField, Button, makeStyles, CardContent } from '@material-ui/core'
import { Formik, Form } from 'formik'
import PropTypes from 'prop-types'
import * as Yup from 'yup';

const useStyles = makeStyles(() => ({
    root: {},
    primaryButton:{
        backgroundColor: '#F9AA33',
        '& .MuiFab-secondary:hover':{
            backgroundColor:'#ef6c00'
        }
    }
}));

const SubmitForm = ({onCreate, onClosePopup}) => {
    const classes = useStyles();

    const handleClosePopOver = () => {
        onClosePopup(null);
    }

    const handleCreate = (bookmark) => {
        onCreate(bookmark);
    }

    return (<Card>
        <CardContent>
            <Formik
                initialValues={{ url: '', tag: '' }}
                validationSchema={Yup.object().shape(
                    {
                        url: Yup.string().url('URL is not valid').required('URL is required'),
                        tag: Yup.string().max(100)
                    }
                )}
                onSubmit={(values, { setSubmitting }) => {
                    handleCreate(values);
                    setSubmitting(false);
                    handleClosePopOver();
                }}
            >
                {({ errors,
                    handleBlur,
                    handleChange,
                    isSubmitting,
                    touched,
                    values }) => (
                    <Form>
                        <TextField
                            error={Boolean(touched.url && errors.url)}
                            fullWidth
                            helperText={touched.url && errors.url}
                            label="URL"
                            margin="normal"
                            name="url"
                            onChange={handleChange}
                            value={values.url}
                            variant="outlined"
                        />
                        <TextField
                            error={Boolean(errors.tag)}
                            fullWidth
                            helperText={errors.tag}
                            label="Tag"
                            margin="normal"
                            name="tag"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.password}
                            variant="outlined"
                        />
                        <Box my={2}>
                            <Button
                                className={classes.primaryButton}
                                color="secondary"
                                disabled={isSubmitting}
                                fullWidth
                                type="submit"
                                variant="contained"
                            >
                                Add
                        </Button>
                        </Box>
                    </Form>
                )}
            </Formik>
        </CardContent>
    </Card>)
}

SubmitForm.propTypes = {
    onCreate: PropTypes.func
}

export default SubmitForm;