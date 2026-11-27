export function PlayIcon({ size = 10 }: { size?: number }) {
  return (
    <svg width={size} height={size * 1.2} viewBox="0 0 10 12" aria-hidden="true">
      <path d="M1 1.2 L9 6 L1 10.8 Z" fill="currentColor" />
    </svg>
  );
}

export function ArrowIcon() {
  return (
    <svg width="16" height="8" viewBox="0 0 16 8" aria-hidden="true">
      <path d="M0 4H14M11 1L14.6 4L11 7" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>
  );
}
