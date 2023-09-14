// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userSignIn } from "../../redux/actions/userActions";
import { Link } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwtDecode from "jwt-decode";

const SignIn = () => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            email,
            password,
        };

        try {
            const response = await dispatch(userSignIn(userData));

    
            if (response.payload.token) {
        
            history.push('/');
            }
        } catch (error) {
            console.error('Error durante el inicio de sesión', error);
        }
    };

    const handleGoogleLoginSuccess = async (credentialResponse) => {
        console.log(credentialResponse);
        const infoUser = jwtDecode(credentialResponse.credential);
        console.log(infoUser);

        const userData = {
            firstName: infoUser.given_name,
            lastName: infoUser.family_name,
            email: infoUser.email,
            password: "Ff@123456", 
            photoURL: "", 
            country: "", 
        };

        console.log("User Data:", userData);

        try {
            const response = await dispatch(userSignIn(userData));

            // Aquí puedes redirigir al usuario si el inicio de sesión con Google es exitoso.
            if (response.payload.token) {
                // Redirige al usuario a la página principal, por ejemplo:
                // history.push('/');
            }
        } catch (error) {
            console.error('Error durante el inicio de sesión con Google', error);
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1200&h=854&dpr=1)' }}>
            <div className="bg-opacity-70 bg-white rounded-lg shadow-md w-full sm:w-96 p-6">
                <h1 className="text-3xl font-bold mb-4">Welcome</h1>
                <form onSubmit={handleSubmit} className="w-full">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-lg mb-1">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full border-gray-300 rounded-md p-3 text-lg focus:ring focus:ring-blue-200"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-lg mb-1">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full border-gray-300 rounded-md p-3 text-lg focus:ring focus:ring-blue-200"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring focus:ring-blue-200 w-full"
                    >
                        Sign In
                    </button>
                    <p className="mt-4 text-gray-700 text-lg text-center">Dont have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link></p>
                </form>
                <div className="mt-4">
                    <GoogleOAuthProvider clientId="857224480491-tdot6sr1jqnho91g1ebhu8gjhvnkoiq4.apps.googleusercontent.com">
                        <GoogleLogin
                            onSuccess={handleGoogleLoginSuccess}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        />
                    </GoogleOAuthProvider>
                </div>
            </div>
        </div>
    );
};

export default SignIn;



