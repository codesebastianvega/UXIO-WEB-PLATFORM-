'use client';

import React from 'react';

interface QuickstartGuidePrintTemplateProps {
  studentName?: string;
  forwardedRef: React.Ref<HTMLDivElement>;
}

export default function QuickstartGuidePrintTemplate({
  studentName = 'Estudiante UXIO',
  forwardedRef,
}: QuickstartGuidePrintTemplateProps) {
  const roadmapItems = [
    { s: 'Semana 1', t: 'Estrategia Comercial', d: 'Encontrar el valor de tu marca y crear 30 ideas estructuradas.' },
    { s: 'Semana 2', t: 'Grabación con Smartphone', d: 'Luz natural, audio nítido y planos B-roll dinámicos.' },
    { s: 'Semana 3', t: 'Creación de Guiones', d: 'Hooks magnéticos en 3 segundos y retención vertical.' },
    { s: 'Semana 4', t: 'Edición Ágil & IA', d: 'Edición en 15 minutos con CapCut y aceleradores de IA.' },
    { s: 'Semana 5', t: 'Ventas por WhatsApp', d: 'De visualizaciones orgánicas a conversaciones comerciales.' },
  ];

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
          padding: '38px 46px',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Header Membrete */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '2px solid #18181B',
              paddingBottom: '14px',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '24px', fontWeight: '900', color: '#09090B', letterSpacing: '-0.5px' }}>
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
                    padding: '2px 8px',
                    borderRadius: '6px',
                    textTransform: 'uppercase',
                  }}
                >
                  Cohorte 01
                </span>
              </div>
              <div style={{ fontSize: '10px', color: '#71717A', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '3px' }}>
                GUÍA RÁPIDA DE INICIO & HOJA DE RUTA · CREATOR LAB
              </div>
            </div>

            <div style={{ backgroundColor: '#F4F4F5', border: '1px solid #E4E4E7', borderRadius: '8px', padding: '6px 12px', textAlign: 'right' }}>
              <div style={{ fontSize: '8px', textTransform: 'uppercase', color: '#71717A', fontWeight: 'bold' }}>Guía Oficial Asignada</div>
              <div style={{ fontSize: '12px', fontWeight: '800', color: '#09090B' }}>{studentName}</div>
            </div>
          </div>

          {/* 1. Ritmo de Trabajo */}
          <div style={{ backgroundColor: '#FAFAFA', border: '1px solid #E4E4E7', borderRadius: '10px', padding: '14px 16px' }}>
            <div style={{ fontSize: '10px', fontWeight: '800', textTransform: 'uppercase', color: '#FE385B', letterSpacing: '0.8px', marginBottom: '10px' }}>
              1. El Ritmo Semanal de Trabajo
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '8px' }}>
              <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E4E4E7', borderRadius: '8px', padding: '8px 10px' }}>
                <div style={{ fontSize: '10px', fontWeight: '800', color: '#FE385B' }}>Lunes</div>
                <div style={{ fontSize: '9px', color: '#71717A', marginTop: '2px' }}>Microclases y desbloqueo de plantillas.</div>
              </div>
              <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E4E4E7', borderRadius: '8px', padding: '8px 10px' }}>
                <div style={{ fontSize: '10px', fontWeight: '800', color: '#FF7F07' }}>Miércoles</div>
                <div style={{ fontSize: '9px', color: '#71717A', marginTop: '2px' }}>Feedback y soporte en chat WhatsApp.</div>
              </div>
              <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E4E4E7', borderRadius: '8px', padding: '8px 10px' }}>
                <div style={{ fontSize: '10px', fontWeight: '800', color: '#10B981' }}>Viernes</div>
                <div style={{ fontSize: '9px', color: '#71717A', marginTop: '2px' }}>Grabación y edición ágil con celular.</div>
              </div>
              <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E4E4E7', borderRadius: '8px', padding: '8px 10px' }}>
                <div style={{ fontSize: '10px', fontWeight: '800', color: '#09090B' }}>Domingo 11:59PM</div>
                <div style={{ fontSize: '9px', color: '#71717A', marginTop: '2px' }}>Entrega de reto en el aula virtual.</div>
              </div>
            </div>
          </div>

          {/* 2. Hoja de Ruta 5 Semanas */}
          <div style={{ backgroundColor: '#FAFAFA', border: '1px solid #E4E4E7', borderRadius: '10px', padding: '14px 16px' }}>
            <div style={{ fontSize: '10px', fontWeight: '800', textTransform: 'uppercase', color: '#10B981', letterSpacing: '0.8px', marginBottom: '10px' }}>
              2. Hoja de Ruta de 5 Semanas (Plan de Ejecución)
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {roadmapItems.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E4E4E7',
                    borderRadius: '8px',
                    padding: '8px 12px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '9px',
                      fontFamily: 'monospace',
                      fontWeight: '800',
                      color: '#059669',
                      backgroundColor: '#ECFDF5',
                      border: '1px solid #A7F3D0',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {item.s.toUpperCase()}
                  </span>
                  <div style={{ fontSize: '11px', color: '#18181B' }}>
                    <strong style={{ color: '#09090B' }}>{item.t}:</strong> <span style={{ color: '#52525B' }}>{item.d}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. La Regla de Oro */}
          <div
            style={{
              backgroundColor: '#18181B',
              color: '#FFFFFF',
              borderRadius: '10px',
              padding: '14px 18px',
              borderLeft: '4px solid #FE385B',
            }}
          >
            <div style={{ fontSize: '9px', fontFamily: 'monospace', textTransform: 'uppercase', color: '#FE385B', fontWeight: 'bold' }}>
              // LA REGLA DE ORO DEL CREADOR UXIO
            </div>
            <div style={{ fontSize: '11px', fontWeight: '600', fontStyle: 'italic', marginTop: '4px', lineHeight: '1.5' }}>
              "Un video imperfecto publicado en redes vende 100 veces más que el video perfecto que nunca salió de tu galería."
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            borderTop: '1px solid #E4E4E7',
            paddingTop: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '9px',
            color: '#71717A',
            fontFamily: 'monospace',
          }}
        >
          <span>© {new Date().getFullYear()} UXIO Academy Platform · Documento Confidencial para {studentName}.</span>
          <span style={{ fontWeight: 'bold', color: '#FE385B' }}>uxio.agency/academy</span>
        </div>
      </div>
    </div>
  );
}
