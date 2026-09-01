'use client';

import React from 'react';

interface SetupChecklistPrintTemplateProps {
  studentName?: string;
  forwardedRef: React.Ref<HTMLDivElement>;
}

export default function SetupChecklistPrintTemplate({
  studentName = 'Estudiante UXIO',
  forwardedRef,
}: SetupChecklistPrintTemplateProps) {
  const checklistSteps = [
    {
      num: '01',
      title: 'Limpieza de Lente Inmediata',
      desc: 'Limpia el cristal de la cámara con paño de microfibra. La grasa de los dedos crea reflejos y aspecto borroso.',
      badge: 'CERO GRASA',
      color: '#FE385B',
    },
    {
      num: '02',
      title: 'Cuadrícula 3x3 y Nivel de Ojos',
      desc: 'Activa la cuadrícula en ajustes de cámara. Alinea tus ojos con la línea horizontal superior del tercio superior.',
      badge: 'ENCUADRE PRO',
      color: '#FF7F07',
    },
    {
      num: '03',
      title: 'Luz Natural a 45° (Sin Contraluz)',
      desc: 'Párate frente a una ventana pero en ángulo diagonal de 45° para iluminar tu rostro con volumen y sombra suave.',
      badge: 'ILUMINACIÓN SUAVE',
      color: '#10B981',
    },
    {
      num: '04',
      title: 'Modo Avión & Bloqueo AE/AF',
      desc: 'Activa Modo Avión para evitar interrupciones de llamadas. Mantén presionado en tu rostro para bloquear enfoque y luz.',
      badge: 'CERO INTERRUPCIONES',
      color: '#00F0FF',
    },
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
                  Semana 0 · Setup
                </span>
              </div>
              <div style={{ fontSize: '10px', color: '#71717A', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '3px' }}>
                CHECKLIST DE GRABACIÓN EN 60 SEGUNDOS · CREATOR LAB
              </div>
            </div>

            <div style={{ backgroundColor: '#F4F4F5', border: '1px solid #E4E4E7', borderRadius: '8px', padding: '6px 12px', textAlign: 'right' }}>
              <div style={{ fontSize: '8px', textTransform: 'uppercase', color: '#71717A', fontWeight: 'bold' }}>Documento Asignado a</div>
              <div style={{ fontSize: '12px', fontWeight: '800', color: '#09090B' }}>{studentName}</div>
            </div>
          </div>

          {/* Intro Box */}
          <div style={{ backgroundColor: '#FAFAFA', border: '1px solid #E4E4E7', borderRadius: '10px', padding: '12px 16px' }}>
            <span style={{ fontSize: '10px', fontWeight: '800', textTransform: 'uppercase', color: '#FE385B', letterSpacing: '0.8px' }}>
              // Protocolo de Calibración Innegociable
            </span>
            <p style={{ fontSize: '11px', color: '#52525B', marginTop: '4px', lineHeight: '1.5' }}>
              Realiza estos 4 pasos en tu teléfono móvil antes de presionar el botón de REC para garantizar máxima calidad visual y de audio.
            </p>
          </div>

          {/* 4 Steps Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {checklistSteps.map((step, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E4E4E7',
                  borderRadius: '10px',
                  padding: '12px 16px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '14px',
                }}
              >
                <div
                  style={{
                    fontSize: '14px',
                    fontWeight: '900',
                    fontFamily: 'monospace',
                    color: step.color,
                    backgroundColor: '#F4F4F5',
                    border: '1px solid #E4E4E7',
                    padding: '6px 10px',
                    borderRadius: '8px',
                  }}
                >
                  {step.num}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <h3 style={{ fontSize: '12px', fontWeight: '800', color: '#09090B' }}>{step.title}</h3>
                    <span
                      style={{
                        fontSize: '8px',
                        fontWeight: 'bold',
                        fontFamily: 'monospace',
                        color: step.color,
                        backgroundColor: '#FAFAFA',
                        border: '1px solid #E4E4E7',
                        padding: '2px 6px',
                        borderRadius: '4px',
                      }}
                    >
                      {step.badge}
                    </span>
                  </div>
                  <p style={{ fontSize: '11px', color: '#52525B', marginTop: '4px', lineHeight: '1.5' }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Golden Reminder */}
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
              // REGLA TÉCNICA DEL CREATOR LAB
            </div>
            <div style={{ fontSize: '11px', fontWeight: '600', fontStyle: 'italic', marginTop: '4px', lineHeight: '1.5' }}>
              "La calidad del audio representa el 50% de la percepción de profesionalismo. Si se oye bien, el espectador se queda."
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
