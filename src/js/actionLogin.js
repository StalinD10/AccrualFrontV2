export async function action({ request }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    const errors = [];

    if (Object.values(data).includes('')) {
        errors.push('Todos los campos son obligatorios');
    }

    // Retornamos datos si hay errores
    if (errors.length) {
        return errors;
    }

    return null; // No hay errores
}
