import React from 'react';
import { PAYMENTS_HISTORY } from '../../constants';

const Payments = () => {
  return (
    <div className="p-4 bg-white rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-green-500 font-bold text-lg">INVOICE PAYMENTS</h1>
        <button className="text-gray-600 border border-gray-600 rounded px-2 py-1 text-sm">RELOAD</button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="border px-4 py-2">REFERENCE NO.</th>
              <th className="border px-4 py-2">ENTITY NAME</th>
              <th className="border px-4 py-2">AMOUNT</th>
              <th className="border px-4 py-2">BANK</th>
              <th className="border px-4 py-2">BRANCH</th>
              <th className="border px-4 py-2">PAYMENT DATE</th>
            </tr>
          </thead>
          <tbody>
            {PAYMENTS_HISTORY.map((payment, idx) => (
              <tr key={idx}>
                <td className="border px-4 py-2">{payment.reference}</td>
                <td className="border px-4 py-2">{payment.enityname}</td>
                <td className="border px-4 py-2">{payment.amount.toLocaleString()}</td>
                <td className="border px-4 py-2">{payment.bank}</td>
                <td className="border px-4 py-2">{payment.branch}</td>
                <td className="border px-4 py-2">{payment.paymentdate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payments;