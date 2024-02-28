export async function catalogSku( ctx: Context, next: () => Promise<any> ) {
  const {
    state: { code },
    clients: { catalog }
  } = ctx

  const data = await catalog.getSkuContext(code.toString())
  ctx.body = data

  await next()
}