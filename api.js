// ── Purviksha API Client ──────────────────────────────────────────────────────
// Change BASE_URL to 'http://localhost:8080/api' to use Java backend instead
// Note: Java backend uses camelCase fields; Node uses snake_case
const BASE_URL = 'http://localhost:5000/api'

// ── Patients ──────────────────────────────────────────────────────────────────

const createPatient = async (patientData) => {
  const res = await fetch(`${BASE_URL}/patients`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(patientData)
  })
  const data = await res.json()
  return data.data
}

const getPatients = async () => {
  const res = await fetch(`${BASE_URL}/patients`)
  const data = await res.json()
  return data.data
}

// ── Hospitals ─────────────────────────────────────────────────────────────────

const createHospital = async (hospitalData) => {
  const res = await fetch(`${BASE_URL}/hospitals`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(hospitalData)
  })
  const data = await res.json()
  return data.data
}

const getHospitals = async () => {
  const res = await fetch(`${BASE_URL}/hospitals`)
  const data = await res.json()
  return data.data
}

// ── Ambulances ────────────────────────────────────────────────────────────────

const createAmbulance = async (ambulanceData) => {
  const res = await fetch(`${BASE_URL}/ambulances`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(ambulanceData)
  })
  const data = await res.json()
  return data.data
}

// GET all ambulances — used by setup.html
const getAmbulances = async () => {
  const res = await fetch(`${BASE_URL}/ambulances`)
  const data = await res.json()
  return data.data
}
const deleteAmbulance = async (id) => {
  const res = await fetch(`${BASE_URL}/ambulances/${id}`, {
    method: 'DELETE'
  })
  const data = await res.json()
  return data
}

const deleteHospital = async (id) => {
  const res = await fetch(`${BASE_URL}/hospitals/${id}`, {
    method: 'DELETE'
  })
  const data = await res.json()
  return data
}

// ── Triage ────────────────────────────────────────────────────────────────────

const submitTriage = async (triageData) => {
  const res = await fetch(`${BASE_URL}/triage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(triageData)
  })
  const data = await res.json()
  return data.data
}

const getAllTriage = async () => {
  const res = await fetch(`${BASE_URL}/triage`)
  const data = await res.json()
  return data.data
}

const getTriageById = async (id) => {
  const res = await fetch(`${BASE_URL}/triage/${id}`)
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
  return data.data
}
