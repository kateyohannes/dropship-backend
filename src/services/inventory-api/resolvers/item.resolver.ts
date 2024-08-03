
export const itemResolves = {
    Query: {
        item: async (parent: unknown, args: { id: string }, context: any) => {
            const { id } = args
            const item = await context.prisma.item.findUnique({ where: { id } })
            return item
        },
        items: async (parent: unknown, args: {}, context: any) => {
            const items = await context.prisma.item.findMany()
            return items
        },
    }
}