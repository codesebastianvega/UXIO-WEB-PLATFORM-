'use client';

import React from 'react';
import { capitalizeFirst, capitalizeWords, formatCurrencyValue } from '@/lib/academy/formatters';

export interface DiagnosisFormData {
  studentName?: string;
  businessName: string;
  mainOffer: string;
  pricePoint: string;
  targetAudience: string;
  painPoints: [string, string, string];
  transformation: string;
  goal5Weeks: string;
  previousObstacle: string;
}

interface BrandDiagnosisPrintTemplateProps {
  form: DiagnosisFormData;
  studentName?: string;
  forwardedRef: React.Ref<HTMLDivElement>;
}

export default function BrandDiagnosisPrintTemplate({
  form,
  studentName = 'Estudiante UXIO',
  forwardedRef,
}: BrandDiagnosisPrintTemplateProps) {
  const rawName = form.studentName?.trim() || studentName;
  const displayName = capitalizeWords(rawName);
  const formattedPrice = formatCurrencyValue(form.pricePoint, true) || 'Sin especificar';

  return (
    <div
      ref={forwardedRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        left: '-99999px',
        top: 0,
        zIndex: -9999,
        pointerEvents: 'none',
      }}
    >
      <div
        className="pdf-export-document"
        style={{
          width: '794px',
          height: '1123px',
          minHeight: '1123px',
          backgroundColor: '#FFFFFF',
          color: '#09090B',
          boxSizing: 'border-box',
          padding: '40px 48px',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* 1. Header Membrete Ultra-Premium */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '2px solid #18181B',
              paddingBottom: '16px',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '26px', fontWeight: '900', letterSpacing: '-0.5px', color: '#09090B' }}>
                  uxio<span style={{ color: '#FE385B' }}>.</span> academy
                </span>
                <span
                  style={{
                    fontSize: '10px',
                    fontWeight: 'bold',
                    fontFamily: 'monospace',
                    color: '#FE385B',
                    backgroundColor: '#FFF1F2',
                    border: '1px solid #FECDD3',
                    padding: '3px 8px',
                    borderRadius: '6px',
                    textTransform: 'uppercase',
                  }}
                >
                  Cohorte 01
                </span>
              </div>
              <div
                style={{
                  fontSize: '11px',
                  color: '#71717A',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginTop: '4px',
                }}
              >
                FICHA DE DIAGNÓSTICO DE MARCA · RETO PRÁCTICO 0.1
              </div>
            </div>

            <div
              style={{
                backgroundColor: '#F4F4F5',
                border: '1px solid #E4E4E7',
                borderRadius: '10px',
                padding: '8px 14px',
                textAlign: 'right',
              }}
            >
              <div style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#71717A', fontWeight: 'bold' }}>
                Documento Estratégico Oficial
              </div>
              <div style={{ fontSize: '13px', fontWeight: '800', color: '#09090B', marginTop: '2px' }}>
                {displayName}
              </div>
            </div>
          </div>

          {/* 2. Bloque 1: Identidad & Oferta */}
          <div
            style={{
              backgroundColor: '#FAFAFA',
              border: '1px solid #E4E4E7',
              borderRadius: '12px',
              padding: '16px 20px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FE385B' }} />
              <span style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.8px', color: '#FE385B' }}>
                Bloque 1 · Identidad de Marca & Oferta Principal
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E4E4E7', borderRadius: '8px', padding: '10px 12px' }}>
                <div style={{ fontSize: '9px', textTransform: 'uppercase', color: '#71717A', fontWeight: 'bold' }}>Creador / Alumno</div>
                <div style={{ fontSize: '12px', fontWeight: '700', color: '#09090B', marginTop: '2px' }}>{displayName}</div>
              </div>
              <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E4E4E7', borderRadius: '8px', padding: '10px 12px' }}>
                <div style={{ fontSize: '9px', textTransform: 'uppercase', color: '#71717A', fontWeight: 'bold' }}>Nombre de la Marca</div>
                <div style={{ fontSize: '12px', fontWeight: '700', color: '#09090B', marginTop: '2px' }}>{capitalizeWords(form.businessName) || 'Sin especificar'}</div>
              </div>
              <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E4E4E7', borderRadius: '8px', padding: '10px 12px' }}>
                <div style={{ fontSize: '9px', textTransform: 'uppercase', color: '#71717A', fontWeight: 'bold' }}>Oferta Estrella (Servicio/Producto)</div>
                <div style={{ fontSize: '12px', fontWeight: '700', color: '#FE385B', marginTop: '2px' }}>{capitalizeFirst(form.mainOffer) || 'Sin especificar'}</div>
              </div>
              <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E4E4E7', borderRadius: '8px', padding: '10px 12px' }}>
                <div style={{ fontSize: '9px', textTransform: 'uppercase', color: '#71717A', fontWeight: 'bold' }}>Ticket Promedio</div>
                <div style={{ fontSize: '12px', fontWeight: '700', color: '#10B981', marginTop: '2px' }}>{formattedPrice}</div>
              </div>
            </div>
          </div>

          {/* 3. Bloque 2: Cliente Ideal & Los 3 Dolores Clave */}
          <div
            style={{
              backgroundColor: '#FAFAFA',
              border: '1px solid #E4E4E7',
              borderRadius: '12px',
              padding: '16px 20px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FF7F07' }} />
              <span style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.8px', color: '#FF7F07' }}>
                Bloque 2 · Cliente Ideal & Psicología de los 3 Dolores
              </span>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E4E4E7', borderRadius: '8px', padding: '10px 14px', marginBottom: '10px' }}>
              <div style={{ fontSize: '9px', textTransform: 'uppercase', color: '#71717A', fontWeight: 'bold' }}>Perfil del Cliente Ideal</div>
              <div style={{ fontSize: '12px', color: '#18181B', fontWeight: '500', marginTop: '3px' }}>
                {capitalizeFirst(form.targetAudience) || 'Sin especificar'}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: '#FFF7ED', border: '1px solid #FFEDD5', borderRadius: '8px', padding: '8px 12px' }}>
                <span style={{ fontSize: '10px', fontFamily: 'monospace', fontWeight: '800', color: '#FF7F07', backgroundColor: '#FFFFFF', padding: '2px 6px', borderRadius: '4px', border: '1px solid #FED7AA' }}>DOLOR 01</span>
                <span style={{ fontSize: '11px', color: '#7C2D12', fontWeight: '600' }}>{capitalizeFirst(form.painPoints[0]) || 'Sin especificar'}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: '#FFF7ED', border: '1px solid #FFEDD5', borderRadius: '8px', padding: '8px 12px' }}>
                <span style={{ fontSize: '10px', fontFamily: 'monospace', fontWeight: '800', color: '#FF7F07', backgroundColor: '#FFFFFF', padding: '2px 6px', borderRadius: '4px', border: '1px solid #FED7AA' }}>DOLOR 02</span>
                <span style={{ fontSize: '11px', color: '#7C2D12', fontWeight: '600' }}>{capitalizeFirst(form.painPoints[1]) || 'Sin especificar'}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: '#FFF7ED', border: '1px solid #FFEDD5', borderRadius: '8px', padding: '8px 12px' }}>
                <span style={{ fontSize: '10px', fontFamily: 'monospace', fontWeight: '800', color: '#FF7F07', backgroundColor: '#FFFFFF', padding: '2px 6px', borderRadius: '4px', border: '1px solid #FED7AA' }}>DOLOR 03</span>
                <span style={{ fontSize: '11px', color: '#7C2D12', fontWeight: '600' }}>{capitalizeFirst(form.painPoints[2]) || 'Sin especificar'}</span>
              </div>
            </div>
          </div>

          {/* 4. Bloque 3: Meta a 5 Semanas & Mayor Desafío */}
          <div
            style={{
              backgroundColor: '#FAFAFA',
              border: '1px solid #E4E4E7',
              borderRadius: '12px',
              padding: '16px 20px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981' }} />
              <span style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.8px', color: '#10B981' }}>
                Bloque 3 · Meta Comercial a 5 Semanas & Desafío
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <div style={{ backgroundColor: '#ECFDF5', border: '1px solid #A7F3D0', borderRadius: '8px', padding: '12px' }}>
                <div style={{ fontSize: '9px', textTransform: 'uppercase', color: '#047857', fontWeight: 'bold' }}>Meta Concreta de Ventas / Leads</div>
                <div style={{ fontSize: '12px', fontWeight: '700', color: '#065F46', marginTop: '4px' }}>{capitalizeFirst(form.goal5Weeks) || 'Sin especificar'}</div>
              </div>
              <div style={{ backgroundColor: '#FEF2F2', border: '1px solid #FECACA', borderRadius: '8px', padding: '12px' }}>
                <div style={{ fontSize: '9px', textTransform: 'uppercase', color: '#B91C1C', fontWeight: 'bold' }}>Mayor Obstáculo Previo</div>
                <div style={{ fontSize: '12px', fontWeight: '700', color: '#991B1B', marginTop: '4px' }}>{capitalizeFirst(form.previousObstacle) || 'Sin especificar'}</div>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Footer Ultra-Elegante */}
        <div
          style={{
            borderTop: '1px solid #E4E4E7',
            paddingTop: '12px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '9px',
            color: '#71717A',
            fontFamily: 'monospace',
          }}
        >
          <span>© {new Date().getFullYear()} UXIO Academy Platform · Documento Confidencial de {displayName}</span>
          <span style={{ fontWeight: 'bold', color: '#FE385B' }}>uxio.agency/academy</span>
        </div>
      </div>
    </div>
  );
}
