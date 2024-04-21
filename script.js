const answerButtons = document.querySelectorAll('.answer-btn');
const questions = document.querySelectorAll('.question');
const progressBar = document.querySelector('.progress-bar');
let currentQuestionIndex = 0;

answerButtons.forEach(button => {
    button.addEventListener('click', () => {
        questions[currentQuestionIndex].style.display = 'none'; // 현재 질문과 답변 숨기기
        currentQuestionIndex++; // 다음 질문 인덱스로 이동
        if (currentQuestionIndex < questions.length) {
            questions[currentQuestionIndex].style.display = 'block'; // 다음 질문과 답변 표시
            const progressWidth = (currentQuestionIndex / questions.length) * 100;
            progressBar.style.width = `${progressWidth}%`; // 진행 바 업데이트
        } else {
            // 마지막 질문일 때 결과 페이지로 이동
            window.location.href = 'index2.html';
        }
    });
});