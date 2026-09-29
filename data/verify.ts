export type VerifyStatus = "geprueft" | "pruefen";

export const VERIFY_LABEL: Record<VerifyStatus, string> = {
  geprueft: "Bekannte Nummer",
  pruefen: "Stand prüfen",
};
