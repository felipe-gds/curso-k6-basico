import http from 'k6/http'
import { sleep, check } from 'k6'

import uuid from './libs/uuid.js'

// Pametrizando vUS e Duration 
export const options = {
    vus: 10,
    duration: '30s',
    //limites
    thresholds: { 
        http_req_duration: ['p(95)<2000'], // 95% das requisicoes devem passar em até 2s
        http_req_failed: ['rate<0.01'] // 1% das requisições podem ocorrer erro
    }
}

export default function () {
    const url = 'http://localhost:3333/signup'

    const payload = JSON.stringify(
        {email: `${uuid.v4().substring(24)}@teste.com`, password: 'Senha.123'} // corta 24 caracteres da uuid
    )

    const headers = {
        'headers' : {
            'Content-Type': 'application/json'
        }
    }

    const resposta = http.post(url, payload, headers)

    check(resposta, {
        'status should be 201': (r) => r.status === 201
    })


    sleep(1)
}

