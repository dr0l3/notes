#!/usr/bin/env bash

uuid=$(uuidgen)

read -p "Enter the topic: "  topic
filename="posts/${topic//[ ]/_}.md"

echo $filename
touch $filename

echo "---" >> $filename
echo "id: $uuid" >> $filename
echo "topic: $topic" >> $filename
echo "---" >> $filename