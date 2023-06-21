
import { getConnection } from "../database/connection";

const axios = require('axios');
const auth = require('../Auth');
const appCfg = require('../AppConf');
const Constants = require('../utils/Constants');

const RestEndpoint = '/payments/v2/-services-paymentservice-unregisteredpayment';
const RestEndpoint1 = '/payments/v2/-services-paymentservice-getstatuspayment';


const getProducts = async (req, res) => {

    let num1 = req.params.v;
    let valor = req.params.n;
    console.log(num1)
    console.log(valor)
    //console.log(res)
    const min = 100, max = 10000000;
    const alet = Math.floor(Math.random() * (max - min + 1) + min);
    //console.log("aleatorio---------> "+alet)

    const headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: await auth.getToken(),
        'x-api-key': appCfg.apiKey
    };

    const endpoint = `${appCfg.apiBasePath}${RestEndpoint}`;

    const data = {
        RequestMessage: {
            RequestHeader: {
                Channel: 'PNP04-C001',
                RequestDate: '2020-01-17T20:26:12.654Z',
                MessageID: alet,
                ClientID: "12345",
                Destination: {
                    ServiceName: 'PaymentsService',
                    ServiceOperation: 'unregisteredPayment',
                    ServiceRegion: 'C001',
                    ServiceVersion: '1.2.0'
                }
            },
            RequestBody: {
                any: {
                    unregisteredPaymentRQ: {
                        phoneNumber: num1,
                        code: 'NIT_1',
                        value: valor,
                        reference1: 'Referencia numero 1',
                        reference2: 'Referencia numero 2',
                        reference3: 'Referencia numero 3'
                    }
                }
            }
        }
    };


    try {
        const response = await axios.request({
            url: endpoint,
            method: 'POST',
            headers,
            data
        });
        if (!!response && response.status === 200 && response.data) {
            const { data } = response;
            const {
                StatusCode: statusCode = '',
                StatusDesc: statusDesc = ''
            } = data.ResponseMessage.ResponseHeader.Status;


            if (statusCode === Constants.NEQUI_STATUS_CODE_SUCCESS) {
                const {
                    transactionId = ''
                } = data.ResponseMessage.ResponseBody.any.unregisteredPaymentRS;
                res.json({
                    mesage: data.ResponseMessage.ResponseBody.any.unregisteredPaymentRS
                })
                 console.info(
                    'Solicitud de pago realizada correctamente\n' +
                    `- Id Transacción -> ${transactionId.trim()}`
                ); 
                
               
            } else {
                throw new Error(`Error ${statusCode} = ${statusDesc}`)
            }
        } else {
            throw new Error('Unable to connect to Nequi, please check the information sent.');
        }
    } catch (error) {
        let msgError = '';

        if (error.isAxiosError) {
            const { status = 'Undefined', statusText = 'Undefined' } = error.response;

            msgError = `Axios error ${status} -> ${statusText}`;

            throw new Error(msgError);
        } else {
            throw error;
        }

    }

};

const getProducts1 = async (req, res) => {

    let codigo = req.params.i
    console.log(`realizado--------> ${codigo}`)


    const headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: await auth.getToken(),
        'x-api-key': appCfg.apiKey
    };

    const endpoint = `${appCfg.apiBasePath}${RestEndpoint1}`;

    const data = {

        RequestMessage: {
            RequestHeader: {
                Channel: "PNP04-C001",
                RequestDate: "2017-06-21T20:26:12.654Z",
                MessageID: "1234567890",
                ClientID: "12345",
                Destination: {
                    ServiceName: "PaymentsService",
                    ServiceOperation: "getStatusPayment",
                    ServiceRegion: "C001",
                    ServiceVersion: "1.0.0"
                }
            },
            RequestBody: {
                any: {
                    getStatusPaymentRQ: {
                        codeQR: codigo
                    }
                }
            }
        }

    };


    try {
        const response = await axios.request({
            url: endpoint,
            method: 'POST',
            headers,
            data
        });
        console.log("consulta")
         if (!!response &&  response.data) {
            const { data } = response;
            const {
                StatusCode: statusCode = '',
                StatusDesc: statusDesc = ''
            } = data.ResponseMessage.ResponseHeader.Status;


            if (statusCode === Constants.NEQUI_STATUS_CODE_SUCCESS) {
               
                  const  transactionId = data.ResponseMessage.ResponseBody.any.getStatusPaymentRS.status;
                res.send({
                    mesage: data.ResponseMessage.ResponseBody.any.getStatusPaymentRS.status
                })
                console.info(
                    'Solicitud de pago realizada correctamente\n' +
                    `- Id Transacción -> ${transactionId}`
                );
            } else {
                throw new Error(`Error ${statusCode} = ${statusDesc}`)
            } 
        } else {
            throw new Error('Unable to connect to Nequi, please check the information sent.');
        } 
    } catch (error) {
        let msgError = '';
        console.log(error)

       /*  if (error.isAxiosError) {
            const { status1 = 'Undefined', statusText = 'Undefined' } = error.response;

            msgError = `Axios error ${status1} -> ${statusText}`;

            throw new Error(msgError);
        } else {
            throw error;
        } */

    }

};


export { getProducts, getProducts1 }

