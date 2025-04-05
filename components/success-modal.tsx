"use client"

interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-md w-[90%] text-center shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-[#333333]">신청이 완료되었습니다</h3>
        <p className="text-base mb-6 text-[#666666]">
          아몬드 서비스 체험을 신청해주셔서 감사합니다. 곧 담당자가 연락드릴 예정입니다.
        </p>
        <button
          onClick={onClose}
          className="px-8 py-3 bg-[#ff8000] text-white font-medium rounded-lg hover:bg-[#f59931] transition-colors border-none cursor-pointer"
        >
          확인
        </button>
      </div>
    </div>
  )
}

