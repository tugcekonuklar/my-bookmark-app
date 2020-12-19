import { useState } from 'react'
import { Box, Card, Popover, TextField, Button, InputAdornment, SvgIcon, Fab, makeStyles, CardContent } from '@material-ui/core'
import { Formik, Form } from 'formik'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { Search as SearchIcon } from 'react-feather';
import AddIcon from '@material-ui/icons/Add';
import * as Yup from 'yup';

const useStyles = makeStyles(() => ({
    root: {},
}));



const ToolBar = ({ className, onChange, onCreate, ...rest }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    function onChangeAction(e) {
        onChange(e.target.value)
    }
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClosePopOver = () => {
        setAnchorEl(null);
    }

    const handleCreate = (bookmark) => {
        onCreate(bookmark);
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div className={clsx(classes.root, className)}
            {...rest}>
            <Box>
                <Card>
                    <CardContent className={classes.content}>
                        <Box display="flex"
                            justifyContent="space-between">
                            <Box maxWidth={500} mt={2}>
                                <TextField
                                    fullWidth
                                    placeholder="Search"
                                    onChange={onChangeAction}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SvgIcon
                                                    fontSize="small"
                                                    color="action"
                                                >
                                                    <SearchIcon />
                                                </SvgIcon>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Box>
                            <Fab

                                color="secondary"
                                aria-describedby={id}
                                aria-label="add"
                                // variant="extended"
                                onClick={handleClick}>
                                <AddIcon />
                                {/* Add Bookmark */}
                            </Fab>
                            <Popover
                                style={{ marginTop: "5px" }}
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClosePopOver}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                            >
                                <Box minWidth={300}>
                                    <Card>
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
                                                    handleSubmit,
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
                                                                onBlur={handleBlur}
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
                                    </Card>
                                </Box>
                            </Popover>
                        </Box>
                    </CardContent>
                </Card>
            </Box>

        </div >
    )

}

ToolBar.propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
    onCreate: PropTypes.func
}

export default ToolBar;