import React, { useEffect, useState } from 'react';
import '../app.css'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const CreateTodo = ({ todo }) => {
    const { id } = useParams();
    const navigate = useNavigate()
    // console.log(id);
    const [formData, setFormData] = useState({
        title: "",
        description: ""
    })

    useEffect(() => {
        if (id) {
            axios.get(`/api/todo/${id}`)
                .then((res) => {
                    const { title, description } = res.data.data
                    setFormData({
                        title, description
                    })
                })
                .catch((err) => console.log("Not get the Data", err))
        }
    }, [id])



    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const todo = {
            title: formData.title,
            description: formData.description
        }

        if (id) {
            try {
                await axios.put(`/api/todo/${id}`, formData);
                setFormData({ title: "", description: "" })
                navigate('/');
            } catch (error) {
                console.error('Error updating todo:', error);
            }
        } else {
            try {
                await axios.post('/api/todo', todo, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                setFormData({ title: "", description: "" })
                navigate('/');
                console.log(res.data.message);

            } catch (error) {
                console.error('Error updating todo:', error);
            }
        }
    }

    return (
        <section className='center'>
            <form>
                <div className="inputbox" >
                    <input type="text" required="required" name='title' id='title' value={formData.title} onChange={handleChange} autoComplete='off'/>
                    <span>Title</span>
                </div>
                <div className="inputbox">
                    <input type="text" required="required" name='description' id='description' value={formData.description} onChange={handleChange} autoComplete='off'/>
                    <span>Description</span>
                </div>
                <div className="inputbox">
                    {id ?
                        <input type="button" value="Update" onClick={handleSubmit} />
                        :
                        <input type="button" value="Submit" onClick={handleSubmit} />
                    }
                </div>
            </form>
        </section>
    )
}

export default CreateTodo
