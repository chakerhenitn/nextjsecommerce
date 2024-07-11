"use client";
import { useUser } from '@clerk/nextjs';
import React from 'react'

export default function Footer() {
  const {user} = useUser();
  return user && (
    <div>Footer</div>
  )
}
