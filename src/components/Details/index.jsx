//DETAILS PAGE

//IMPORTING
import React from 'react';

//DETAILS
const Details = (props) => {
    return (
        <div>
             <h1 className="text-center text-primary">( {props.index+1} )</h1>
            <div style={{border:"1px solid grey",borderRadius:"5px"}} className="container">
               <br/>
                <h4> <b>Nome: </b> {props.name}</h4>
                
                <hr/>
                <h4> <b>Email: </b> {props.email}</h4>
                
                <hr/>
                <h4> <b>Assunto: </b> {props.subject}</h4>
                
                <hr/>
                <h4> <b>Mensagem: </b> {props.message}</h4>
                
                <hr/>
                <h4><b>Currículo: </b></h4>
                <iframe title="resume" src={props.resumeURL} width="100%" height="500px"></iframe>
                
                <hr/>
                <h5> <b>Tempo: </b> {props.time}</h5>
            </div>
        </div>

    )
}

export default Details;
