export default function priceCurrency({price}) {
    return (
      
      new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",minimumSignificantDigits:2}).format(price/10)
   
    )
  }