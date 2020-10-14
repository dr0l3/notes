curl "http://localhost:8108/collections" -X POST -H "Content-Type: application/json" \
      -H "X-TYPESENSE-API-KEY:demo" -d '{
        "name": "movies",
        "fields": [
          {"name": "id", "type": "string" },
          {"name": "title", "type": "string" },
          {"name": "poster", "type": "string" },

          {"name": "overview", "type": "string" },
          {"name": "release_date", "type": "int32" },
          {"name": "genres", "type": "string[]"}
        ],
        "default_sorting_field": "release_date"
      }'