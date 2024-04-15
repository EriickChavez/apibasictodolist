# Endpoints

## Obtener todas las tareas

```bash
GET /todo/
```

Este endpoint devuelve todas las tareas existentes.

Parámetros

```ts
Ninguno;
```

## Agregar una nueva tarea

```bash
POST /todo/add
```

Este endpoint permite agregar una nueva tarea.

Parámetros

```ts
title: String;
descripcion: String;
completed: Boolean;
```

## Actualizar una tarea existente

```bash
PUT /todo/update
```

Este endpoint permite actualizar una tarea existente.

Dos parametros:

```ts
id: String;
```

un objeto con los siguientes campos:

```ts
title: String;
descripcion: String;
completed: Boolean;
```

## Eliminar una tarea

```bash
DELETE /todo/delete
```

Este endpoint permite eliminar una tarea existente.

Parámetros

```ts
id: String;
```
