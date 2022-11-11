import React, { useState } from 'react'
import { Form, Button, Input, Checkbox, notification } from "antd";
import { UserOutlined } from "@ant-design/icons"
import "./Register.scss"
import { emailValidation, minLengthValidation } from '../../validations/FormValidations';
import { signUpApi } from '../../api/user';

function Register() {
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        repeatPassword: "",
        privacyPolicy: false,
    });
    const [formValid, setFormValid] = useState({
        email: false,
        password: false,
        repeatPassword: false,
        privacyPolicy: false,
    });

    const changeForm = (e) => {
        if (e.target.name === "privacyPolicy") {
            setInputs({
                ...inputs,
                [e.target.name]: e.target.checked,
            });
        } else {
            setInputs({
                ...inputs,
                [e.target.name]: e.target.value
            })
        }
    }

    const inputValidation = (e) => {
        console.log(formValid)
        const { type, name } = e.target;
        if (type === "email") {
            setFormValid({ ...formValid, [name]: emailValidation(e.target) });
        }
        if (type === "password") {
            setFormValid({ ...formValid, [name]: minLengthValidation(e.target, 6) });
        }
        if (type === "checkbox") {
            setFormValid({ ...formValid, [name]: e.target.checked });
        }
    }

    const register = async (e) => {
        e.preventDefault();
        console.log("Estoy en register");
        const emailVal = inputs.email;
        const passwordVal = inputs.password;
        const repeatPasswordVal = inputs.repeatPassword;
        const privacyPolicyVal = inputs.privacyPolicy;

        if (!emailVal || !passwordVal || !repeatPasswordVal || !privacyPolicyVal) {
            notification["error"]({
                message: "Todos los campos son obligatorios",
            })
            console.log("Vacios")
        } else {
            if (passwordVal !== repeatPasswordVal) {
                notification["error"]({
                    message: "Las contrasñeas tienen que ser iguales"
                })
                console.log("Son diferentes")
            } else {
                const result = await signUpApi(inputs);
                console.log(result)
                if (!result.user_creado) {
                    notification["error"]({
                        message: result.message
                    })
                } else {
                    notification["success"]({
                        message: result.message
                    });
                    resetForm();
                }
            }
        }
    }

    const resetForm = () => {
        const inputs = document.getElementsByTagName("input");
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].classList.remove("success");
            inputs[i].classList.remove("error");
        }
        setInputs({
            email: "",
            password: "",
            repeatPasswordVal: "",
            privacyPolicy: ""
        });

        setFormValid({
            email: "",
            password: "",
            repeatPassword: "",
            privacyPolicy: ""
        })
    }


    return (
        <Form className="register-form" onChange={changeForm}>
            <Form.Item>
                <Input
                    prefix={
                        <UserOutlined  style={{color: "rgba(0,0,0,.25)"}}/>
                    }
                    type="email"
                    name='email'
                    placeholder='Correo electronico'
                    className='login-form__input'
                    value={inputs.email}
                    onChange={inputValidation}
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={
                        <UserOutlined />
                    }
                    type="password"
                    name='password'
                    placeholder='Contraseña'
                    className='login-form__input'
                    value={inputs.password}
                    onChange={inputValidation}

                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={
                        <UserOutlined />
                    }
                    type="password"
                    name='repeatPassword'
                    placeholder='Repetir contraseña'
                    className='login-form__input'
                    value={inputs.repeatPassword}
                    onChange={inputValidation}

                />
            </Form.Item>
            <Form.Item>
                <Checkbox 
                name='privacyPolicy'
                 checked={inputs.privacyPolicy}
                 onChange={inputValidation}
                 >
                    He leido y acepto las politicas de privacidad.
                </Checkbox>
            </Form.Item>
            <Form.Item>
                <Button onClick={register} className='login-form__button'>
                    Crear cuenta
                </Button>
            </Form.Item>
        </Form>
    )
}

export default Register