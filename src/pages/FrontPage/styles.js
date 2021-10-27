import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2));
  background-image: url(../../images/background_v2.svg);
`;

export const Form = styled.form`
  left: 63px;
  top: -50px;
  width: 600px;
  height: 600px
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Open Sans', sans-serif;
  border-radius: 20px;
  input {
        flex: 0;
        margin-bottom: 15px;
        padding: 0 20px;
        color: #777;
        font-size: 26px;
        font-family: 'Open Sans', sans-serif;
        border: 2px solid #ddd;
        padding: .75rem 1rem
        &::placeholder {
          color: #blue;
        }
      }
      
      p {
        left: 21.65%;
        right: 21.49%;
        top: 26.88%;
        bottom: 63.75%;
        fontFamily: 'Open Sans', sans-serif,
        font-style: normal;
        font-weight: 600;
        font-size: 14x;
        line-height: 20px;
        align-items: center;
        text-align-vertical: center;
        letter-spacing: 0.2px;
      }

      .custom-control-input input{
        display:none;
        }

      .custom-control-input{
          margin-left: 14px;
          border: 1px solid #007DA2;
          box-sizing: border-box;
          border-radius: 5px;
        }

        .form-control {
          left: 109px;
          top: 114px;
          width: 387px;
          height: 18px;
          
          font-weight: 600, 
          text-align: center;
           
          color: #606060;
          width: 387px;
          height: 18px;
            border-color: rgba(62, 62, 62, 0.38);
            border-radius: 5px;
            
            border-width: 2px;
            background-color:#F6F6F6;
          
          text-align: center;
          text-align-vertical: center;
        }

        #protocolo {
          font-size: 22px; 
          color: #007DA2;
          border-width: 4px;
        }
       .buttons{
         width: 51%;
         display:flex;
         flex-flow: row wrap;
         justify-content: flex-end;
         align-items: center;
         margin-left:6vw;
         
       }
        .button{
          /*margin-top:24px;*/
          width: 163px;
          height: 40px;
          background: #0297C3;
          border-radius: 9px;
          cursor: pointer;
          transition-duration: 0.4s;
          -webkit-box-shadow: none;
          box-shadow: none;
          outline: 0 !important;
          border:none;
          margin-left: 5px;
          }
        
          .button:hover {
            background-color: #007DA2; 
          }

          .button span{
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: bold;
          font-size: 18px;
          line-height: 20px;
          text-align: center;
          color: #FFFFFF;
          }

          .label-checkbox {
            font-family: Roboto;
            font-style: regular ;
            font-weight: 400;
            font-size: 12px;
            line-height: 20px;
            margin-left: 10px;
            margin-right: 40px;
            color: #606060;
            position: relative;
            top: -2px;
          }

          .label-checkbox.sms{
            position: relative;
            left : -2px
          }

          .texto-topo{
            font-family: 'Inter', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 13px;
           
            margin-bottom: 15px;           
            text-align: center;
           
            color: #606060;
            width: 387px;
            height: 18px;
            border-color: rgba(62, 62, 62, 0.38);
            border-radius: 5px;
            
            border-width: 2px;
            background-color:#F6F6F6;
           
          }
          
         
          .anexos img{
            position:relative;
            top: 8px;
            cursor: pointer;
          }

          .mensagem-usuario{
            resize: none;
            background-color:#F6F6F6;;
            border: 1px solid rgba(62, 62, 62, 0.38);
            box-sizing: border-box;
            border-radius: 5px;
            height: 88px;
            width: 421px;
            margin-bottom: 8px;
          }
          .wrap{
            display: flex;
            flex-direction: column;
          }

          .show{
            display: block !important;
          }

          .mensagem-usuario::placeholder{
            font-family: Open Sans;
            font-style: normal;
            font-weight: 600;
            font-size: 12px;
            line-height: 20px;
            padding-left: 11px;
            padding-top: 10px;
            color: #A8A8A8;
          }

          input::placeholder{
            font-family: Open Sans;
            font-style: normal;
            font-weight: 600;
            font-size: 12px;
            line-height: 20px;
            padding-left: 0;
            text-align: left;
            color: #A8A8A8;

          }
          input[type='file'] {
            display: none
          }
          .mail-box{
            background-color:#F6F6F6;
          }

          
`;