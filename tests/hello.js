import http from 'k6/http'
import { sleep, check } from 'k6'

// relatorio em html - summary
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js"
export function handleSummary(data) {
    return {
      "summary.html": htmlReport(data),
    };
  }

// script inicial para validar que o K6 está rodando (local)
export default function () {
    const resposta = http.get('http://localhost:3333')

    check(resposta, {
        'status should be 200': (r) => r.status === 200
    })

    sleep(1)
  }
  