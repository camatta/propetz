export async function ratesAndBenefits( ctx: Context ) {
  const {
    state: { code },
    clients: { ratesAndBenefits }
  } = ctx

  const data = await ratesAndBenefits.getPromotionById(code.toString())
  ctx.body = data
}