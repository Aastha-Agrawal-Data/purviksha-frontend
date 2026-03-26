// Base URL — change this one line to swap between Node and Java backends
const BASE_URL = 'http://localhost:5000/api'

// --- HOSPITALS ---
const getHospitals = async () => {
  const res = await fetch(`${BASE_URL}/hospitals`)
  const data = await res.json()
  return data.data
}

// --- PATIENTS ---
const createPatient = async (patientData) => {
  const res = await fetch(`${BASE_URL}/patients`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(patientData)
  })
  const data = await res.json()
  return data.data
}

// --- AMBULANCES ---
const getAmbulances = async () => {
  const res = await fetch(`${BASE_URL}/ambulances`)
  const data = await res.json()
  return data.data
}

// --- TRIAGE ---
const submitTriage = async (triageData) => {
  const res = await fetch(`${BASE_URL}/triage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(triageData)
  })
  const data = await res.json()
  return data
}

const getAllTriage = async () => {
  const res = await fetch(`${BASE_URL}/triage`)
  const data = await res.json()
  return data.data
}

const updateTriageStatus = async (id, status) => {
  const res = await fetch(`${BASE_URL}/triage/${id}/status`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status })
  })
  const data = await res.json()
  return data
}