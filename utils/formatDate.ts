export function formatDate(date: string | Date, time: boolean = false) {
    return new Date(date).toLocaleDateString("ru-RU", {
        year: "numeric",
        month: "long",
        day: "numeric",
        ...(time && { hour: '2-digit', minute: '2-digit' })
    })
}