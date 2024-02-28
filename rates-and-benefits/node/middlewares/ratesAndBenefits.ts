export async function ratesAndBenefits( ctx: Context, next: () => Promise<any> ) {
  const {
    state: { code },
    clients: { ratesAndBenefits }
  } = ctx

  const data = await ratesAndBenefits.getPromotionById(code.toString())
  ctx.body = data

  await next()
}