const restful = require('node-restful');
const mongoose = restful.mongoose;

const creditSchema = new mongoose.Schema({
  name: {
    type: String, 
    required: [true, 'Informe um nome para o crédito.']
  },
  value: {
    type: Number,  
    min: 0, 
    required: [true, 'É necessário informar um valor válido.']
  }
});

const debtSchema = new mongoose.Schema({
  name: {
    type: String, 
    required: [true, 'Informe um nome para o débito.']
  },
  value: {
    type: Number,  
    min: 0, 
    required: [true, 'É necessário informar um valor válido.']
  },
  status: {
    type: String, 
    required: [true, 'Informe a situação do lançamento! Valores válidods: PAGO | PENDENTE | AGENDADO.'], 
    uppercase: true, 
    enum: ['PAGO', 'PENDENTE', 'AGENDADO']
  }
});

const billingCycleSchema = new mongoose.Schema({
  name: {
    type: String, 
    required: true
  },
  month: {
    type: Number,  
    min: 1,
    max: 12, 
    required: true
  },
  year: {
    type: Number,  
    min: 1970,
    max: new Date().getFullYear(), 
    required: true
  },
  credits: [creditSchema],
  debts: [debtSchema],
});

module.exports = restful.model('BillingCycle', billingCycleSchema);