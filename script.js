"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2;
class Smartphone {
    constructor() {
        this.carica = 0;
        this.numeroChiamate = 0;
        this.costoMinuto = 0.20;
        this.registroChiamate = [];
    }
    ricarica(euro) {
        this.carica += euro;
        console.log(`Credito residuo: $${this.carica.toFixed(2)}`);
    }
    numero404() {
        console.log(`Credito residuo: $${this.carica.toFixed(2)}`);
    }
    getNumeroChiamate() {
        console.log(`Numero di chiamate effettuate: ${this.numeroChiamate}`);
        return this.numeroChiamate;
    }
    chiamata(min) {
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
    azzeraChiamate() {
        this.numeroChiamate = 0;
        console.log("Contatore delle chiamate azzerato.");
    }
    mostraRegistroChiamate() {
        console.log("Registro delle chiamate:");
        this.registroChiamate.forEach((call) => {
            console.log(`ID: ${call.id}, Durata: ${call.durata} minuti, Data/Ora: ${call.dateTime}`);
        });
    }
}
const phone1 = new Smartphone();
(_a = document.getElementById("phoneForm1")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", (event) => {
    event.preventDefault();
    const chargeInput = document.getElementById("charge1");
    const euro = parseFloat(chargeInput.value);
    phone1.ricarica(euro);
    updateBalanceDisplay();
    chargeInput.value = "";
});
(_b = document.getElementById("rechargeButton1")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
    const chargeInput = document.getElementById("charge1");
    const euro = parseFloat(chargeInput.value);
    phone1.ricarica(euro);
    updateBalanceDisplay();
    chargeInput.value = "";
});
(_c = document.getElementById("showBalance1")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
    phone1.numero404();
    updateBalanceDisplay();
});
(_d = document.getElementById("callForm1")) === null || _d === void 0 ? void 0 : _d.addEventListener("submit", (event) => {
    event.preventDefault();
    const callMinutesInput = document.getElementById("callMinutes1");
    const minutes = parseInt(callMinutesInput.value);
    phone1.chiamata(minutes);
    updateBalanceDisplay();
    updateCallsDisplay();
    callMinutesInput.value = "";
});
(_e = document.getElementById("showCalls1")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", () => {
    phone1.getNumeroChiamate();
    updateCallsDisplay();
});
(_f = document.getElementById("resetCalls1")) === null || _f === void 0 ? void 0 : _f.addEventListener("click", () => {
    phone1.azzeraChiamate();
    updateCallsDisplay();
    updateCallLogModal();
});
(_g = document.getElementById("contactMeiLingButton1")) === null || _g === void 0 ? void 0 : _g.addEventListener("click", () => {
    const callDurationInput = document.getElementById("callMinutes1");
    const minutes = parseInt(callDurationInput.value);
    phone1.chiamata(minutes);
    updateBalanceDisplay();
    updateCallsDisplay();
    updateCallLogModal();
    callDurationInput.value = "";
});
(_h = document.getElementById("showAllCalls1")) === null || _h === void 0 ? void 0 : _h.addEventListener("click", () => {
    phone1.mostraRegistroChiamate();
    updateCallLogModal();
    const callLogModal = new bootstrap.Modal(document.getElementById("callLogModal1"));
    callLogModal.show();
});
(_j = document.getElementById("callLogModal1")) === null || _j === void 0 ? void 0 : _j.addEventListener("hidden.bs.modal", () => {
    const callLogModalBody = document.getElementById("callLogModalBody1");
    callLogModalBody.innerHTML = "";
});
function updateBalanceDisplay() {
    const balanceDisplay = document.getElementById("balanceDisplay1");
    balanceDisplay.textContent = `Funds: $${phone1.carica.toFixed(2)}`;
}
function updateCallsDisplay() {
    const callsDisplay = document.getElementById("callsDisplay1");
    callsDisplay.textContent = `Calls Amount: ${phone1.numeroChiamate}`;
}
function updateCallLogModal() {
    const callLogModalBody = document.getElementById("callLogModalBody1");
    callLogModalBody.innerHTML = "";
    phone1.registroChiamate.forEach((call) => {
        const callInfo = document.createElement("p");
        callInfo.textContent = `ID: ${call.id}, Durata: ${call.durata} minuti, Data/Ora: ${call.dateTime}`;
        callLogModalBody.appendChild(callInfo);
    });
}
// interfaccia 2
const phone2 = new Smartphone();
(_k = document.getElementById("phoneForm2")) === null || _k === void 0 ? void 0 : _k.addEventListener("submit", (event) => {
    event.preventDefault();
    const chargeInput = document.getElementById("charge2");
    const euro = parseFloat(chargeInput.value);
    phone2.ricarica(euro);
    updateBalanceDisplay2();
    chargeInput.value = "";
});
(_l = document.getElementById("rechargeButton2")) === null || _l === void 0 ? void 0 : _l.addEventListener("click", () => {
    const chargeInput = document.getElementById("charge2");
    const euro = parseFloat(chargeInput.value);
    phone2.ricarica(euro);
    updateBalanceDisplay2();
    chargeInput.value = "";
});
(_m = document.getElementById("showBalance2")) === null || _m === void 0 ? void 0 : _m.addEventListener("click", () => {
    phone2.numero404();
    updateBalanceDisplay2();
});
(_o = document.getElementById("callForm2")) === null || _o === void 0 ? void 0 : _o.addEventListener("submit", (event) => {
    event.preventDefault();
    const callMinutesInput = document.getElementById("callMinutes2");
    const minutes = parseInt(callMinutesInput.value);
    phone2.chiamata(minutes);
    updateBalanceDisplay2();
    updateCallsDisplay2();
    callMinutesInput.value = "";
});
(_p = document.getElementById("showCalls2")) === null || _p === void 0 ? void 0 : _p.addEventListener("click", () => {
    phone2.getNumeroChiamate();
    updateCallsDisplay2();
});
(_q = document.getElementById("resetCalls2")) === null || _q === void 0 ? void 0 : _q.addEventListener("click", () => {
    phone2.azzeraChiamate();
    updateCallsDisplay2();
    updateCallLogModal2(); // Aggiorna il modale azzerando la lista delle chiamate
});
(_r = document.getElementById("contactMeiLingButton2")) === null || _r === void 0 ? void 0 : _r.addEventListener("click", () => {
    const callDurationInput = document.getElementById("callMinutes2");
    const minutes = parseInt(callDurationInput.value);
    phone2.chiamata(minutes);
    updateBalanceDisplay2();
    updateCallsDisplay2();
    updateCallLogModal2(); // Aggiorna il modale aggiungendo l'ultima chiamata alla lista
    callDurationInput.value = "";
});
(_s = document.getElementById("showAllCalls2")) === null || _s === void 0 ? void 0 : _s.addEventListener("click", () => {
    phone2.mostraRegistroChiamate();
    updateCallLogModal2();
    const callLogModal = new bootstrap.Modal(document.getElementById("callLogModal2"));
    callLogModal.show();
});
(_t = document.getElementById("callLogModal2")) === null || _t === void 0 ? void 0 : _t.addEventListener("hidden.bs.modal", () => {
    const callLogModalBody = document.getElementById("callLogModalBody2");
    callLogModalBody.innerHTML = ""; // Pulisce il contenuto del modale quando viene chiuso
});
function updateBalanceDisplay2() {
    const balanceDisplay = document.getElementById("balanceDisplay2");
    balanceDisplay.textContent = `Funds: $${phone2.carica.toFixed(2)}`;
}
function updateCallsDisplay2() {
    const callsDisplay = document.getElementById("callsDisplay2");
    callsDisplay.textContent = `Calls Amount: ${phone2.numeroChiamate}`;
}
function updateCallLogModal2() {
    const callLogModalBody = document.getElementById("callLogModalBody2");
    callLogModalBody.innerHTML = "";
    phone2.registroChiamate.forEach((call) => {
        const callInfo = document.createElement("p");
        callInfo.textContent = `ID: ${call.id}, Durata: ${call.durata} minuti, Data/Ora: ${call.dateTime}`;
        callLogModalBody.appendChild(callInfo);
    });
}
// interfaccia 3
const phone3 = new Smartphone();
(_u = document.getElementById("phoneForm3")) === null || _u === void 0 ? void 0 : _u.addEventListener("submit", (event) => {
    event.preventDefault();
    const chargeInput = document.getElementById("charge3");
    const euro = parseFloat(chargeInput.value);
    phone3.ricarica(euro);
    updateBalanceDisplay3();
    chargeInput.value = "";
});
(_v = document.getElementById("rechargeButton3")) === null || _v === void 0 ? void 0 : _v.addEventListener("click", () => {
    const chargeInput = document.getElementById("charge3");
    const euro = parseFloat(chargeInput.value);
    phone3.ricarica(euro);
    updateBalanceDisplay3();
    chargeInput.value = "";
});
(_w = document.getElementById("showBalance3")) === null || _w === void 0 ? void 0 : _w.addEventListener("click", () => {
    phone3.numero404();
    updateBalanceDisplay3();
});
(_x = document.getElementById("callForm3")) === null || _x === void 0 ? void 0 : _x.addEventListener("submit", (event) => {
    event.preventDefault();
    const callMinutesInput = document.getElementById("callMinutes3");
    const minutes = parseInt(callMinutesInput.value);
    phone3.chiamata(minutes);
    updateBalanceDisplay3();
    updateCallsDisplay3();
    callMinutesInput.value = "";
});
(_y = document.getElementById("showCalls3")) === null || _y === void 0 ? void 0 : _y.addEventListener("click", () => {
    phone3.getNumeroChiamate();
    updateCallsDisplay3();
});
(_z = document.getElementById("resetCalls3")) === null || _z === void 0 ? void 0 : _z.addEventListener("click", () => {
    phone3.azzeraChiamate();
    updateCallsDisplay3();
    updateCallLogModal3(); // Aggiorna il modale azzerando la lista delle chiamate
});
(_0 = document.getElementById("contactMeiLingButton3")) === null || _0 === void 0 ? void 0 : _0.addEventListener("click", () => {
    const callDurationInput = document.getElementById("callMinutes3");
    const minutes = parseInt(callDurationInput.value);
    phone3.chiamata(minutes);
    updateBalanceDisplay3();
    updateCallsDisplay3();
    updateCallLogModal3(); // Aggiorna il modale aggiungendo l'ultima chiamata alla lista
    callDurationInput.value = "";
});
(_1 = document.getElementById("showAllCalls3")) === null || _1 === void 0 ? void 0 : _1.addEventListener("click", () => {
    phone3.mostraRegistroChiamate();
    updateCallLogModal3();
    const callLogModal = new bootstrap.Modal(document.getElementById("callLogModal3"));
    callLogModal.show();
});
(_2 = document.getElementById("callLogModal3")) === null || _2 === void 0 ? void 0 : _2.addEventListener("hidden.bs.modal", () => {
    const callLogModalBody = document.getElementById("callLogModalBody3");
    callLogModalBody.innerHTML = ""; // Pulisce il contenuto del modale quando viene chiuso
});
function updateBalanceDisplay3() {
    const balanceDisplay = document.getElementById("balanceDisplay3");
    balanceDisplay.textContent = `Funds: $${phone3.carica.toFixed(2)}`;
}
function updateCallsDisplay3() {
    const callsDisplay = document.getElementById("callsDisplay3");
    callsDisplay.textContent = `Calls Amount: ${phone3.numeroChiamate}`;
}
function updateCallLogModal3() {
    const callLogModalBody = document.getElementById("callLogModalBody3");
    callLogModalBody.innerHTML = "";
    phone3.registroChiamate.forEach((call) => {
        const callInfo = document.createElement("p");
        callInfo.textContent = `ID: ${call.id}, Durata: ${call.durata} minuti, Data/Ora: ${call.dateTime}`;
        callLogModalBody.appendChild(callInfo);
    });
}
