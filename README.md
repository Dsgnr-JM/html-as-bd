# Proyecto: Base de Datos HTML (Prueba de Concepto)
Descripción:

Este proyecto es un experimento para utilizar archivos HTML como una forma de almacenar y gestionar datos. Es importante destacar que este enfoque no es recomendado para aplicaciones reales debido a sus limitaciones en rendimiento, escalabilidad, seguridad y mantenimiento.

**Objetivo:**

Demostrar la viabilidad técnica de utilizar HTML como base de datos, explorando las operaciones básicas de CRUD (Crear, Leer, Actualizar, Eliminar).

**Funcionamiento:**

**Creación de tablas:**

- Se crea un archivo HTML por cada tabla que se desee almacenar.
El contenido del archivo HTML sigue una estructura específica con encabezados (<thead>) y filas (<tbody>).
Lectura de tablas:

- Se lee el contenido del archivo HTML correspondiente.
- Se parsea el contenido HTML para extraer los datos en formato de array de objetos.

**Actualización de tablas:**

- Se lee el contenido del archivo HTML.
- Se modifica la información de la fila correspondiente.
- Se sobrescribe el archivo HTML con los datos actualizados.

**Eliminación de registros:**

- Se lee el contenido del archivo HTML.
- Se elimina la fila correspondiente.
- Se sobrescribe el archivo HTML con los datos restantes.

**Inserción de registros:**

- Se lee el contenido del archivo HTML.
- Se agrega una nueva fila con los datos proporcionados.
- Se sobrescribe el archivo HTML con los datos actualizados.

**Limitaciones:**

- Rendimiento: El acceso a archivos puede ser lento, especialmente para grandes conjuntos de datos.
- Escalabilidad: No es adecuado para aplicaciones con un alto volumen de datos o usuarios.
- Seguridad: Almacenar datos sensibles en archivos HTML plantea riesgos de seguridad.
- Mantenimiento: El código es complejo y difícil de mantener debido a la manipulación manual del HTML.

**Conclusión:**

Este proyecto demuestra que es técnicamente posible utilizar archivos HTML como base de datos, pero no es recomendable para aplicaciones reales debido a las limitaciones mencionadas. Es importante considerar alternativas como bases de datos relacionales o NoSQL para proyectos de producción.

**Uso:**

Este código es únicamente para fines educativos y experimentales. No debe ser utilizado en entornos de producción.

**Advertencia:**

El uso de este código en un entorno de producción puede tener consecuencias negativas debido a su rendimiento, seguridad y falta de mantenimiento.
