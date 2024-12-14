//Input element
const inputNumEl = document.querySelector("#inputNum-el")

//Length output element
const outputLengthEl = document.querySelector("#outputLength")

//Volume output element
const outputVolumeEl = document.querySelector("#outputVolume")

//Mass output element
const outputMassEl = document.querySelector("#outputMass")

inputNumEl.addEventListener("input", () => {
    const inputValue = Number(inputNumEl.value)

    // Conversion functions Yes, I Groked for this
    const metersToFeet = (meters) => meters * 3.28084;
    const feetToMeters = (feet) => feet / 3.28084;
    const litersToGallons = (liters) => liters * 0.264172;
    const gallonsToLiters = (gallons) => gallons / 0.264172;
    const kilosToPounds = (kilos) => kilos * 2.20462;
    const poundsToKilos = (pounds) => pounds / 2.20462;

    outputLengthEl.textContent = `${inputValue} meters = ${metersToFeet(inputValue).toFixed(2)} feet | ${inputValue} feet = ${feetToMeters(inputValue).toFixed(2)} meters`
    outputVolumeEl.textContent = `${inputValue} liters = ${litersToGallons(inputValue).toFixed(2)} gallons | ${inputValue} gallons = ${gallonsToLiters(inputValue).toFixed(2)} liters`
    outputMassEl.textContent = `${inputValue} kilos = ${kilosToPounds(inputValue).toFixed(2)} pounds | ${inputValue} pounds = ${poundsToKilos(inputValue).toFixed(2)} kilos`
})