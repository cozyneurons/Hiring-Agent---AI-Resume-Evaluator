import SectionCard from '../ui/SectionCard'

export default function BonusDeductionsPanel({ bonus, deductions }) {
  return (
    <SectionCard title="Bonus & Deductions" subtitle="Adjustments applied to base score">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-hr-green/5 border border-hr-green/20">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-hr-green">Bonus Points</span>
            <span className="text-xl font-bold text-hr-green">+{bonus?.total ?? 0}</span>
          </div>
          {Array.isArray(bonus?.breakdown) ? (
            <ul className="space-y-1 mt-2">
              {bonus.breakdown.map((item, i) => (
                <li key={i} className="text-sm text-hr-muted leading-relaxed flex gap-2 items-start">
                  <span className="text-hr-green shrink-0 mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-hr-muted leading-relaxed whitespace-pre-line mt-2">
              {bonus?.breakdown || 'No bonus points awarded.'}
            </p>
          )}
        </div>

        <div className="p-4 rounded-xl bg-hr-danger/5 border border-hr-danger/20">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-hr-danger">Deductions</span>
            <span className="text-xl font-bold text-hr-danger">
              −{deductions?.total ?? 0}
            </span>
          </div>
          {Array.isArray(deductions?.reasons) ? (
            <ul className="space-y-1 mt-2">
              {deductions.reasons.map((item, i) => (
                <li key={i} className="text-sm text-hr-muted leading-relaxed flex gap-2 items-start">
                  <span className="text-hr-danger shrink-0 mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-hr-muted leading-relaxed whitespace-pre-line mt-2">
              {deductions?.reasons || 'No deductions applied.'}
            </p>
          )}
        </div>
      </div>
    </SectionCard>
  )
}
