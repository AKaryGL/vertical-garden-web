import React from 'react';
import { Link } from 'react-router-dom';
// import logoImg from '../IMGs/Logo_para_Tienda_Ecológica_Sencillo_Verde-removebg-preview.png';

const Register = () => {
    return (
        <div style={styles.cardContainer}>
            <div style={styles.card}>
                <div style={styles.left}>
                    {/* <img src={logoImg} alt="Logo" style={styles.logo} /> */}
                </div>
                <div style={styles.right}>
                    <form style={styles.form}>
                        <h1 style={styles.heading}>Vertical Garden</h1>
                        <h2 style={styles.subHeading}>Welcome to Vertical Garden</h2>
                        <label htmlFor="userName" style={styles.label}>Create a user name</label>
                        <input type="text" id="userName" placeholder="Username" style={styles.input} />
                        <label htmlFor="email" style={styles.label}>Insert your Email</label>
                        <input type="text" id="email" placeholder="Email" style={styles.input} />
                        <label htmlFor="password" style={styles.label}>Password</label>
                        <input type="password" id="password" placeholder="Password" style={styles.input} />
                        <button type="submit" style={styles.buttonPrimary}>Register</button>
                        <div style={styles.orContainer}>
                            <div style={styles.line}></div>
                            <div style={styles.orText}>OR</div>
                            <div style={styles.line}></div>
                        </div>
                        <Link to="/profile" style={{ textDecoration: 'none' }}>
                            <button style={styles.buttonSecondary}>Login</button>
                        </Link>

                    </form>
                </div>
            </div>
        </div >
    );
}

const styles = {
    cardContainer: {
        width: '100%', /* Ancho al 100% */
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#fff', /* Fondo oscuro semi-transparente */
    },
    card: {
        width: '80%', /* Ancho aproximado del 80% */
        maxWidth: '800px', /* Ancho máximo */
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 4px 20px rgba(0.2,0.2,0.2,0.5)', /* Sombra más notoria */
        display: 'flex',
        overflow: 'hidden', /* Oculta el contenido que sobresale del borde */
    },
    left: {
        flex: '1',
        backgroundColor: '#4A854E', /* Fondo verde del lado izquierdo */
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px', /* Añadido para centrar el contenido */
    },
    right: {
        flex: '1', /* Cambiado a 1 para ocupar la mitad del ancho */
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        textAlign: 'center',
    },
    input: {
        width: '100%',
        padding: '8px',
        marginBottom: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        fontSize: '14px',
    },
    buttonPrimary: {
        width: '100%',
        padding: '10px',
        marginBottom: '10px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '14px',
    },
    buttonSecondary: {
        width: '100%',
        padding: '10px',
        marginBottom: '10px',
        backgroundColor: '#eee',
        color: '#333',
        border: '1px solid #ccc',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '14px',
    },
    logo: {
        width: '100%',
        height: 'auto',
        maxWidth: '200px',
    },
    heading: {
        fontFamily: 'Lemonada',
        fontSize: '28px',
        color: '#4A854E',
        margin: '10px 0',
    },
    subHeading: {
        fontWeight: 'bold',
        fontSize: '16px',
        margin: '10px 0',
    },
    label: {
        display: 'block',
        textAlign: 'left',
        marginBottom: '5px',
        fontSize: '12px',
        color: '#555',
    },
    forgotPassword: {
        textAlign: 'left',
        marginBottom: '10px',
        fontSize: '12px',
        color: '#555',
    },
    orContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '20px 0',
    },
    line: {
        flex: '1',
        height: '1px',
        backgroundColor: '#ccc',
    },
    orText: {
        margin: '0 10px',
        color: '#555',
        fontSize: '14px',
        fontWeight: 'bold',
    }
};

export default Register;
