import React from 'react';
import { connect } from "react-redux"
import { Button, FormGroup, Form, Label, Input, FormFeedback } from 'reactstrap';
import { Formik } from "formik"; 
import * as Yup from "yup";  
import {categories, ratings, status} from "../../constants"
import {addBook} from "../../state/ducks/books/actions"


const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is a required field'),
    author: Yup.string().required('Author is a required field')
})

const AddBookForm = (props) => {    
    return (
        <div>
            <Formik
            initialValues = {{
                title : "", 
                author: "", 
                categories: "", 
                rating: "", 
                imageUrl: "", 
                description: "", 
                status : ""
            }}
            validationSchema={validationSchema}

            onSubmit={(values) => {
                props.addBook(values)
      }}
            >

            {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    
                <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input 
                    type="title" 
                    name="title" 
                    id="title" 
                    placeholder="Name of the Book"
                    values={values.title}
                    onChange={handleChange}
                    invalid={errors.title} />
                    {
                        errors.title && <FormFeedback>Oh noes! that name is already taken</FormFeedback>
                    }
                </FormGroup>
                <FormGroup>
                    <Label for="author">Author</Label>
                    <Input 
                    type="author" 
                    name="author" 
                    id="author" 
                    placeholder="Author of the Book"
                    values={values.author}
                    onChange={handleChange}
                    invalid={errors.author} />
                    {
                        errors.author && <FormFeedback>Oh noes! that name is already taken</FormFeedback>
                    }
                     
                </FormGroup>
                <FormGroup>
                    <Label for="image">Image URL</Label>
                    <Input 
                    type="text" 
                    name="image" 
                    id="image" 
                    placeholder="Image of the Book"
                    values={values.imageUrl}
                    onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">Categories</Label>
                    <Input 
                    type="select" 
                    name="categories" 
                    id="categories"
                    values={values.categories}
                    onChange={handleChange}>
                        {
                            categories.map(item => {
                                return <option>{item}</option>
                            })
                        }
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">Description</Label>
                    <Input 
                    type="textarea" 
                    name="description" 
                    id="description" 
                        values={values.description}
                    onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">Rating</Label>
                    <Input 
                    type="select" 
                    name="rating" 
                    id="rating"
                    values={values.rating}
                    onChange={handleChange}>
                        {
                            ratings.map(item => {
                                return <option>{item}</option>
                            })
                        }
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">Status</Label>
                    <Input 
                    type="select" 
                    name="status" 
                    id="status"
                    values={values.status}
                    onChange={handleChange}>
                        {
                            status.map(item => {
                                return <option>{item}</option>
                            })
                        }
                    </Input>
                </FormGroup>
                <Button color="primary">Submit</Button>
                    </Form>
                 )}
                
    </Formik>
</div>
    );
}

const mapDispatchToProps = {
    addBook
}

export default connect(null, mapDispatchToProps)(AddBookForm);
