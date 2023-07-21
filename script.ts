

class Smartphone {
  carica: number;
  numeroChiamate: number;
  costoMinuto: number;
  registroChiamate: { id: number; durata: number; dateTime: string }[];

  constructor() {
    this.carica = 0;
    this.numeroChiamate = 0;
    this.costoMinuto = 0.20;
    this.registroChiamate = [];
  }

  ricarica(euro: number): void {
    this.carica += euro;
    console.log(`Credito residuo: $${this.carica.toFixed(2)}`);
  }

  numero404(): void {
    console.log(`Credito residuo: $${this.carica.toFixed(2)}`);
  }

  getNumeroChiamate(): number {
    console.log(`Numero di chiamate effettuate: ${this.numeroChiamate}`);
    return this.numeroChiamate;
  }

  chiamata(min: number): void {
    const costoChiamata = min * this.costoMinuto;
    if (costoChiamata > this.carica) {
      alert("Low funds! GO LOOT.");
      return;
    }

    this.carica -= costoChiamata;
    this.numeroChiamate++;
    console.log(`Chiamata effettuata per ${min} minuti. Costo: $${costoChiamata.toFixed(2)}.`);
    this.registroChiamate.push({
      id: this.numeroChiamate,
      durata: min,
      dateTime: new Date().toISOString(),
    });
  }

  azzeraChiamate(): void {
    this.numeroChiamate = 0;
    console.log("Contatore delle chiamate azzerato.");
  }

  mostraRegistroChiamate(): void {
    console.log("Registro delle chiamate:");
    this.registroChiamate.forEach((call) => {
      console.log(`ID: ${call.id}, Durata: ${call.durata} minuti, Data/Ora: ${call.dateTime}`);
    });
  }
}

const phone1 = new Smartphone();

document.getElementById("phoneForm1")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const chargeInput = document.getElementById("charge1") as HTMLInputElement;
  const euro = parseFloat(chargeInput.value);
  phone1.ricarica(euro);
  updateBalanceDisplay();
  chargeInput.value = "";
});

document.getElementById("rechargeButton1")?.addEventListener("click", () => {
  const chargeInput = document.getElementById("charge1") as HTMLInputElement;
  const euro = parseFloat(chargeInput.value);
  phone1.ricarica(euro);
  updateBalanceDisplay();
  chargeInput.value = "";
});

document.getElementById("showBalance1")?.addEventListener("click", () => {
  phone1.numero404();
  updateBalanceDisplay();
});

document.getElementById("callForm1")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const callMinutesInput = document.getElementById("callMinutes1") as HTMLInputElement;
  const minutes = parseInt(callMinutesInput.value);
  phone1.chiamata(minutes);
  updateBalanceDisplay();
  updateCallsDisplay();
  callMinutesInput.value = "";
});

document.getElementById("showCalls1")?.addEventListener("click", () => {
  phone1.getNumeroChiamate();
  updateCallsDisplay();
});

document.getElementById("resetCalls1")?.addEventListener("click", () => {
  phone1.azzeraChiamate();
  updateCallsDisplay();
  updateCallLogModal();
});

document.getElementById("contactMeiLingButton1")?.addEventListener("click", () => {
  const callDurationInput = document.getElementById("callMinutes1") as HTMLInputElement;
  const minutes = parseInt(callDurationInput.value);
  phone1.chiamata(minutes);
  updateBalanceDisplay();
  updateCallsDisplay();
  updateCallLogModal();
  callDurationInput.value = "";
});

document.getElementById("showAllCalls1")?.addEventListener("click", () => {
  phone1.mostraRegistroChiamate();
  updateCallLogModal();
  const callLogModal = new bootstrap.Modal(document.getElementById("callLogModal1"));
  callLogModal.show();
});

document.getElementById("callLogModal1")?.addEventListener("hidden.bs.modal", () => {
  const callLogModalBody = document.getElementById("callLogModalBody1") as HTMLElement;
  callLogModalBody.innerHTML = "";
});

function updateBalanceDisplay(): void {
  const balanceDisplay = document.getElementById("balanceDisplay1") as HTMLElement;
  balanceDisplay.textContent = `Funds: $${phone1.carica.toFixed(2)}`;
}

function updateCallsDisplay(): void {
  const callsDisplay = document.getElementById("callsDisplay1") as HTMLElement;
  callsDisplay.textContent = `Calls Amount: ${phone1.numeroChiamate}`;
}

function updateCallLogModal(): void {
  const callLogModalBody = document.getElementById("callLogModalBody1") as HTMLElement;
  callLogModalBody.innerHTML = "";

  phone1.registroChiamate.forEach((call) => {
    const callInfo = document.createElement("p");
    callInfo.textContent = `ID: ${call.id}, Durata: ${call.durata} minuti, Data/Ora: ${call.dateTime}`;
    callLogModalBody.appendChild(callInfo);
  });
}



// interfaccia 2

const phone2 = new Smartphone();

document.getElementById("phoneForm2")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const chargeInput = document.getElementById("charge2") as HTMLInputElement;
  const euro = parseFloat(chargeInput.value);
  phone2.ricarica(euro);
  updateBalanceDisplay2();
  chargeInput.value = "";
});

document.getElementById("rechargeButton2")?.addEventListener("click", () => {
  const chargeInput = document.getElementById("charge2") as HTMLInputElement;
  const euro = parseFloat(chargeInput.value);
  phone2.ricarica(euro);
  updateBalanceDisplay2();
  chargeInput.value = "";
});

document.getElementById("showBalance2")?.addEventListener("click", () => {
  phone2.numero404();
  updateBalanceDisplay2();
});

document.getElementById("callForm2")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const callMinutesInput = document.getElementById("callMinutes2") as HTMLInputElement;
  const minutes = parseInt(callMinutesInput.value);
  phone2.chiamata(minutes);
  updateBalanceDisplay2();
  updateCallsDisplay2();
  callMinutesInput.value = "";
});

document.getElementById("showCalls2")?.addEventListener("click", () => {
  phone2.getNumeroChiamate();
  updateCallsDisplay2();
});

document.getElementById("resetCalls2")?.addEventListener("click", () => {
  phone2.azzeraChiamate();
  updateCallsDisplay2();
  updateCallLogModal2(); // Aggiorna il modale azzerando la lista delle chiamate
});

document.getElementById("contactMeiLingButton2")?.addEventListener("click", () => {
  const callDurationInput = document.getElementById("callMinutes2") as HTMLInputElement;
  const minutes = parseInt(callDurationInput.value);
  phone2.chiamata(minutes);
  updateBalanceDisplay2();
  updateCallsDisplay2();
  updateCallLogModal2(); // Aggiorna il modale aggiungendo l'ultima chiamata alla lista
  callDurationInput.value = "";
});

document.getElementById("showAllCalls2")?.addEventListener("click", () => {
  phone2.mostraRegistroChiamate();
  updateCallLogModal2();
  const callLogModal = new bootstrap.Modal(document.getElementById("callLogModal2"));
  callLogModal.show();
});

document.getElementById("callLogModal2")?.addEventListener("hidden.bs.modal", () => {
  const callLogModalBody = document.getElementById("callLogModalBody2") as HTMLElement;
  callLogModalBody.innerHTML = ""; // Pulisce il contenuto del modale quando viene chiuso
});

function updateBalanceDisplay2(): void {
  const balanceDisplay = document.getElementById("balanceDisplay2") as HTMLElement;
  balanceDisplay.textContent = `Funds: $${phone2.carica.toFixed(2)}`;
}

function updateCallsDisplay2(): void {
  const callsDisplay = document.getElementById("callsDisplay2") as HTMLElement;
  callsDisplay.textContent = `Calls Amount: ${phone2.numeroChiamate}`;
}

function updateCallLogModal2(): void {
  const callLogModalBody = document.getElementById("callLogModalBody2") as HTMLElement;
  callLogModalBody.innerHTML = "";

  phone2.registroChiamate.forEach((call) => {
    const callInfo = document.createElement("p");
    callInfo.textContent = `ID: ${call.id}, Durata: ${call.durata} minuti, Data/Ora: ${call.dateTime}`;
    callLogModalBody.appendChild(callInfo);
  });
}


// interfaccia 3


const phone3 = new Smartphone();

document.getElementById("phoneForm3")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const chargeInput = document.getElementById("charge3") as HTMLInputElement;
  const euro = parseFloat(chargeInput.value);
  phone3.ricarica(euro);
  updateBalanceDisplay3();
  chargeInput.value = "";
});

document.getElementById("rechargeButton3")?.addEventListener("click", () => {
  const chargeInput = document.getElementById("charge3") as HTMLInputElement;
  const euro = parseFloat(chargeInput.value);
  phone3.ricarica(euro);
  updateBalanceDisplay3();
  chargeInput.value = "";
});

document.getElementById("showBalance3")?.addEventListener("click", () => {
  phone3.numero404();
  updateBalanceDisplay3();
});

document.getElementById("callForm3")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const callMinutesInput = document.getElementById("callMinutes3") as HTMLInputElement;
  const minutes = parseInt(callMinutesInput.value);
  phone3.chiamata(minutes);
  updateBalanceDisplay3();
  updateCallsDisplay3();
  callMinutesInput.value = "";
});

document.getElementById("showCalls3")?.addEventListener("click", () => {
  phone3.getNumeroChiamate();
  updateCallsDisplay3();
});

document.getElementById("resetCalls3")?.addEventListener("click", () => {
  phone3.azzeraChiamate();
  updateCallsDisplay3();
  updateCallLogModal3(); // Aggiorna il modale azzerando la lista delle chiamate
});

document.getElementById("contactMeiLingButton3")?.addEventListener("click", () => {
  const callDurationInput = document.getElementById("callMinutes3") as HTMLInputElement;
  const minutes = parseInt(callDurationInput.value);
  phone3.chiamata(minutes);
  updateBalanceDisplay3();
  updateCallsDisplay3();
  updateCallLogModal3(); // Aggiorna il modale aggiungendo l'ultima chiamata alla lista
  callDurationInput.value = "";
});

document.getElementById("showAllCalls3")?.addEventListener("click", () => {
  phone3.mostraRegistroChiamate();
  updateCallLogModal3();
  const callLogModal = new bootstrap.Modal(document.getElementById("callLogModal3"));
  callLogModal.show();
});

document.getElementById("callLogModal3")?.addEventListener("hidden.bs.modal", () => {
  const callLogModalBody = document.getElementById("callLogModalBody3") as HTMLElement;
  callLogModalBody.innerHTML = ""; // Pulisce il contenuto del modale quando viene chiuso
});

function updateBalanceDisplay3(): void {
  const balanceDisplay = document.getElementById("balanceDisplay3") as HTMLElement;
  balanceDisplay.textContent = `Funds: $${phone3.carica.toFixed(2)}`;
}

function updateCallsDisplay3(): void {
  const callsDisplay = document.getElementById("callsDisplay3") as HTMLElement;
  callsDisplay.textContent = `Calls Amount: ${phone3.numeroChiamate}`;
}

function updateCallLogModal3(): void {
  const callLogModalBody = document.getElementById("callLogModalBody3") as HTMLElement;
  callLogModalBody.innerHTML = "";

  phone3.registroChiamate.forEach((call) => {
    const callInfo = document.createElement("p");
    callInfo.textContent = `ID: ${call.id}, Durata: ${call.durata} minuti, Data/Ora: ${call.dateTime}`;
    callLogModalBody.appendChild(callInfo);
  });
}