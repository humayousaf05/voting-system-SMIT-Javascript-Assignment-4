let candidates = [];

function addCandidate() {
    const candidateNameInput = document.getElementById('candidateName');
    const candidateName = candidateNameInput.value.trim();

    if (candidateName !== '') {
        candidates.push({ name: candidateName, votes: 0 });
        displayCandidates();
        candidateNameInput.value = '';
    }
}

function displayCandidates() {
    const candidatesListContainer = document.getElementById('candidatesList');
    candidatesListContainer.innerHTML = '';

    candidates.forEach((candidate, index) => {
        const candidateDiv = document.createElement('div');
        candidateDiv.innerHTML = `
            <div class="d-flex justify-content-between align-items-center">
                <span>${candidate.name} - Votes: ${candidate.votes}</span>
                <button class="btn btn-primary btn-sm" onclick="voteForCandidate(${index})">Vote</button>
                <button class="btn btn-danger btn-sm" onclick="removeCandidate(${index})">🗙</button>
            </div>
        `;
        candidateDiv.classList.add('border', 'p-2', 'mt-2');
        candidatesListContainer.appendChild(candidateDiv);
    });
}

function voteForCandidate(index) {
    candidates[index].votes++;
    displayCandidates();
}

function removeCandidate(index) {
    candidates.splice(index, 1);
    displayCandidates();
}
