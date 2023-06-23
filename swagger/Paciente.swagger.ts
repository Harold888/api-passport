
export default {
    /**
     * @swagger
     *
     * /pacientes:
     *   get:
     *     summary: Obtener un Json de prueba
     *     responses:
     *       200:
     *         description: Has obtenido un json de prueba
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 mensaje:
     *                   type: string
     *             example:
     *               mensaje: "Bienvenido a la ruta de pacientes"
     */
    /**
     * @swagger
     *
     * /crear_paciente:
     *   post:
     *     summary: Crear un nuevo paciente
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               cedula:
     *                 type: integer
     *                 description: Cédula del paciente
     *               nombre:
     *                 type: string
     *                 description: Nombre del paciente
     *               apellido:
     *                 type: string
     *                 description: Apellido del paciente
     *               fecha:
     *                 type: string
     *                 description: Fecha de nacimiento del paciente (en formato YYYY/MM/DD)
     *               telefono:
     *                 type: string
     *                 description: Teléfono del paciente
     *             example:
     *               cedula: 1123456
     *               nombre: "Prueba"
     *               apellido: "Prueba"
     *               fecha: "1956/01/01"
     *               telefono: "+57-3456789"
     *     responses:
     *       200:
     *         description: El paciente ha sido creado exitosamente
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 mensaje:
     *                   type: string
     *                   description: Mensaje de confirmación
     *             example:
     *               mensaje: "Paciente creado correctamente"
     *       400:
     *         description: Error al crear el paciente
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 mensaje:
     *                   type: string
     *                   description: Mensaje de error
     *             example:
     *               mensaje: "Error al crear el paciente"
     */
  };

  