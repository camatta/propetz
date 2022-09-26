import { useState, useEffect } from 'react'

import { useOrderForm } from 'vtex.order-manager/OrderForm'
import { FormattedCurrency } from 'vtex.format-currency'

import styles from './MinicartCashback.css'

const MinicartCashback = () => {
  const [cashbackValue, setCashbackValue] = useState(0)
  const {
    orderForm: { totalizers }
  } = useOrderForm()

  useEffect(() => {
    const value = totalizers[0]?.value ? totalizers[0]?.value / 100 : 0
    const cashback = value * 0.02
    setCashbackValue(cashback)
  }, [totalizers])

  return (
    <>
      {!!cashbackValue && (
        <div className={`${styles.cashbackCartContainer}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-star">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>

          <span><FormattedCurrency value={Math.max(0, cashbackValue)} /> de cashback comprando com Elevage+</span>

          <div className={`${styles.tooltipWrapper}`}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16" height="16" viewBox="0 0 24 24"
                fill="#000" stroke="#fff" strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-help-circle"
              >
              <circle cx="12" cy="12" r="10"/>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
              <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>

            <p className={`${styles.tooltipText}`}>
              Saiba mais sobre nossa política de cashback <a href="#" className={`${styles.tooltipLink}`}>clicando aqui</a>.
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default MinicartCashback