# Base de datos Hotel Manager

Este directorio contiene el primer modelo de PostgreSQL para el Hotel Manager.

## Archivos

- `schema.sql`: crea esquema, tipos, tablas, indices, triggers y vistas.
- `seed.sql`: inserta datos iniciales para probar habitaciones, huespedes, reservaciones, pagos, notificaciones y configuracion.

## Tablas principales

- `hotel.app_users`: usuarios del sistema.
- `hotel.guests`: huespedes.
- `hotel.room_types`: tipos de habitacion.
- `hotel.rooms`: habitaciones.
- `hotel.reservations`: reservaciones.
- `hotel.payments`: pagos de reservaciones.
- `hotel.notifications`: notificaciones del panel.
- `hotel.settings`: configuracion general.

## Vistas utiles

- `hotel.room_status_counts`: conteo de habitaciones por estado.
- `hotel.reservation_summary`: resumen de reservaciones con huesped y habitacion.

## Orden de ejecucion

```sql
\i database/schema.sql
\i database/seed.sql
```

Cuando lo pasemos a Docker, estos archivos se pueden montar en `/docker-entrypoint-initdb.d/` para que PostgreSQL los ejecute al crear la base.

Los permisos para PostgREST se deben agregar despues, cuando definamos que tablas seran publicas y cuales requieren autenticacion.
