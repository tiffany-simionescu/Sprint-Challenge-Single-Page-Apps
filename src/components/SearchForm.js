import React, { useState, useEffect } from "react";
import {withFormik, Form, Field} from "formik";
import axios from "axios";

function SearchForm(values, status) {

  const [search, setSearch] = useState([]);
  console.log("search", search);

  useEffect(() => {
    if(search) {
      setSearch([...search, status])
    }
  }, [status]);

  const onInputChange = event => {
    setSearch({
      ...search,
      [event.target.name]: event.target.value
    });
  };
 
  return (
    <section className="search-form">
      <Form>
        {/* <Field
          type="text"
          name="name"
          placeholder="Search..."
        /> */}
        <input name="name" onChange={onInputChange} />
        <button type="submit" onSubmit={onInputChange}>Search</button>
        <h3>Name: {search.name || "Unknown"}</h3>
      </Form>
    </section>
  );
}

const FormikSearchForm = withFormik({
  mapPropsToValues({name}) {
    return {
      name: name || ""
    }
  },

  handleSubmit(values, {setStatus}) {
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${values.name}`)
      .then(res => {
        console.log("setSearchData", res.data.results);
        setStatus(res.data.results);
      })
      .catch(err => console.log("Database Error", err))
  }
})(SearchForm)

console.log(FormikSearchForm);

export default FormikSearchForm;