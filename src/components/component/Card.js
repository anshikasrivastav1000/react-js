import React from 'react';

const Card = ({ image, price, desc }) => {
    return (
        <div style={{
            width: '200px',
            boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
            transition: '0.3s',
            borderRadius: '5px',
            margin: '10px',
            backgroundColor: '#f1f1f1',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <img src={image} style={{
                width: '100%',
                height: 'auto',
                borderTopLeftRadius: '5px',
                borderTopRightRadius: '5px',
            }} alt="product" />
            <div style={{
                padding: '15px',
                width: '100%',
            }}>
                <h3 style={{
                    fontSize: '1.5rem',
                    marginBottom: '10px',
                    textAlign: 'center',
                    color: '#333',
                }}>{price}</h3>
                <p style={{
                    fontSize: '1rem',
                    textAlign: 'center',
                    color: '#666',
                }}>{desc}</p>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '10px',
                }}>
                    <button style={{
                        backgroundColor: 'blue',
                        color: 'white',
                        border: 'none',
                        padding: '10px',
                        textAlign: 'center',
                        textDecoration: 'none',
                        display: 'inline-block',
                        fontSize: '1rem',
                        borderRadius: '3px',
                        cursor: 'pointer',
                        width: '45%',
                        transition: 'background-color 0.3s',
                    }}>Add to cart</button>
                    <button style={{
                        backgroundColor: 'blue',
                        color: 'white',
                        border: 'none',
                        padding: '10px',
                        textAlign: 'center',
                        textDecoration: 'none',
                        display: 'inline-block',
                        fontSize: '1rem',
                        borderRadius: '3px',
                        cursor: 'pointer',
                        width: '45%',
                        transition: 'background-color 0.3s',
                    }}>Buy now</button>
                </div>
            </div>
        </div>
    );
}

export default Card;