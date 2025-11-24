# 🔐 Configurar Reglas de Seguridad de Firebase

## Paso 1: Ir a Firestore Database

1. En Firebase Console, ve a **"Firestore Database"** (menú izquierdo)
2. Click en la pestaña **"Reglas"**

## Paso 2: Reemplazar las Reglas

Copia y pega estas reglas:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /products/{productId} {
      // Permitir lectura a todos
      allow read: if true;
      
      // Permitir escritura a todos (temporal para testing)
      // TODO: En producción, restringir a usuarios autenticados
      allow write: if true;
    }
  }
}
```

## Paso 3: Publicar

1. Click en **"Publicar"**
2. Espera confirmación

---

## ⚠️ Nota de Seguridad

Estas reglas permiten que cualquiera pueda leer y escribir productos.

**Para producción, deberías:**
1. Implementar autenticación de Firebase
2. Cambiar `allow write: if true;` por `allow write: if request.auth != null;`

Por ahora, para testing, está bien así.
